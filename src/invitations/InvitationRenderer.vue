<template>
  <div v-if="invitation" class="inv-renderer" :style="rootStyle">
    <!-- Top Bar -->
    <InvTopBar :theme="theme" :badge="planBadge" />

    <!-- Hero -->
    <InvHero
      :theme="theme"
      :event="invitation.event"
      :countdown="countdown"
      :showCountdown="hasFeature('countdown') && !isExpired"
      :showMusic="hasFeature('music')"
      :musicOn="musicRef?.musicOn?.value ?? false"
      @toggle-music="musicRef?.toggle()"
    />

    <!-- Video (Pro) -->
    <InvVideo
      v-if="hasFeature('video') && featureConfig('video')"
      :theme="theme"
      :config="featureConfig('video')"
    />

    <!-- Message -->
    <InvMessage
      v-if="hasFeature('message') && featureConfig('message')"
      :theme="theme"
      :config="featureConfig('message')"
    />

    <!-- Timeline / Itinerary -->
    <InvTimeline
      v-if="
        hasFeature('interactive_timeline') &&
        featureConfig('interactive_timeline')
      "
      :theme="theme"
      :config="featureConfig('interactive_timeline')"
    />
    <InvTimeline
      v-else-if="hasFeature('itinerary') && featureConfig('itinerary')"
      :theme="theme"
      :config="featureConfig('itinerary')"
    />

    <!-- Gallery -->
    <InvGallery
      v-if="
        (hasFeature('gallery_extended') || hasFeature('gallery_basic')) &&
        galleryConfig
      "
      :theme="theme"
      :config="galleryConfig"
    />

    <!-- Location -->
    <InvLocation
      v-if="hasFeature('location') && featureConfig('location')"
      :theme="theme"
      :config="featureConfig('location')"
      :calendarUrl="calendarUrl"
      :appleCalendarUrl="invitation.plan === 'pro' ? appleCalendarUrl : null"
    />

    <!-- Dresscode -->
    <InvDresscode
      v-if="hasFeature('dresscode') && featureConfig('dresscode')"
      :theme="theme"
      :config="featureConfig('dresscode')"
    />

    <!-- Hashtag -->
    <InvHashtag
      v-if="hasFeature('hashtag') && featureConfig('hashtag')"
      :theme="theme"
      :config="featureConfig('hashtag')"
    />

    <!-- Gift Table -->
    <InvGiftTable
      v-if="hasFeature('gift_table') && featureConfig('gift_table')"
      :theme="theme"
      :config="featureConfig('gift_table')"
    />

    <!-- Lodging -->
    <InvLodging
      v-if="hasFeature('lodging') && featureConfig('lodging')"
      :theme="theme"
      :config="featureConfig('lodging')"
    />

    <!-- Trivia -->
    <InvTrivia
      v-if="hasFeature('trivia') && featureConfig('trivia')"
      :theme="theme"
      :config="featureConfig('trivia')"
    />

    <!-- RSVP — variant-based -->
    <InvSmartRsvp
      v-if="rsvpVariant === 'smart'"
      :theme="theme"
      :config="featureConfig('smart_rsvp')"
    />
    <InvFormRsvp
      v-else-if="rsvpVariant === 'form'"
      :theme="theme"
      :config="featureConfig('form_rsvp')"
      :waConfig="
        hasFeature('whatsapp_rsvp') ? featureConfig('whatsapp_rsvp') : null
      "
    />
    <InvWhatsappRsvp
      v-else-if="rsvpVariant === 'whatsapp'"
      :theme="theme"
      :config="featureConfig('whatsapp_rsvp')"
    />

    <!-- Footer -->
    <InvFooter :theme="theme" :config="invitation.footer || {}" />

    <!-- Floating Music Button -->
    <InvMusic
      v-if="hasFeature('music') && featureConfig('music')"
      ref="musicRef"
      :theme="theme"
      :config="featureConfig('music')"
    />
  </div>

  <!-- Loading / Not Found -->
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <LucideIcon name="mail" class-name="w-10 h-10 mx-auto mb-4 text-gray-400" />
      <p class="text-gray-500 text-sm">Invitación no encontrada</p>
      <router-link
        to="/invitaciones"
        class="text-blue-500 text-xs mt-2 inline-block hover:underline"
      >
        Volver
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import LucideIcon from "../components/LucideIcon.vue";
import { useInvitation } from "./composables/useInvitation.js";
import { useCountdown } from "./composables/useCountdown.js";

// Modules
import InvTopBar from "./modules/InvTopBar.vue";
import InvHero from "./modules/InvHero.vue";
import InvVideo from "./modules/InvVideo.vue";
import InvMessage from "./modules/InvMessage.vue";
import InvTimeline from "./modules/InvTimeline.vue";
import InvGallery from "./modules/InvGallery.vue";
import InvLocation from "./modules/InvLocation.vue";
import InvDresscode from "./modules/InvDresscode.vue";
import InvHashtag from "./modules/InvHashtag.vue";
import InvGiftTable from "./modules/InvGiftTable.vue";
import InvLodging from "./modules/InvLodging.vue";
import InvTrivia from "./modules/InvTrivia.vue";
import InvSmartRsvp from "./modules/InvSmartRsvp.vue";
import InvFormRsvp from "./modules/InvFormRsvp.vue";
import InvWhatsappRsvp from "./modules/InvWhatsappRsvp.vue";
import InvFooter from "./modules/InvFooter.vue";
import InvMusic from "./modules/InvMusic.vue";

const props = defineProps({
  invitation: { type: Object, default: null },
});

// Composables
const {
  theme,
  hasFeature,
  featureConfig,
  calendarUrl,
  appleCalendarUrl,
  rsvpVariant,
  planBadge,
} = props.invitation ? useInvitation(props.invitation) : {};

const { countdown, isExpired } = props.invitation
  ? useCountdown(props.invitation.event.date)
  : { countdown: ref([]), isExpired: ref(false) };

// Ref for music component
const musicRef = ref(null);

// Gallery: combine basic + extended into one config
const galleryConfig = computed(() => {
  const ext = featureConfig?.("gallery_extended");
  if (ext) return ext;
  const basic = featureConfig?.("gallery_basic");
  return basic || null;
});

// Root style based on theme
const rootStyle = computed(() => {
  if (!theme?.value) return {};
  const t = theme.value;
  return {
    background: t.colors.bg,
    color: t.colors.text,
    fontFamily: t.fonts.body,
    cursor: "auto",
    minHeight: "100vh",
  };
});
</script>

<style scoped>
.inv-renderer {
  cursor: auto !important;
}
.inv-renderer * {
  cursor: auto !important;
}
</style>

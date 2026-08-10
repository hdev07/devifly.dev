export const WA_NUMBER = "525635926679";

export function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const foodImageMap = {
  "Taco de Pastor":
    "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=200&h=200&fit=crop",
  "Taco de Bistec":
    "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=200&h=200&fit=crop",
  "Taco de Suadero":
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=200&h=200&fit=crop",
  "Quesadilla de Queso":
    "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=200&h=200&fit=crop",
  "Gringa de Pastor":
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop",
  "Orden de Guacamole":
    "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=200&h=200&fit=crop",
  "Refresco":
    "https://images.unsplash.com/photo-1622483767028-3ff66c5fa4e0?w=200&h=200&fit=crop",
  "Agua de Jamaica":
    "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=200&h=200&fit=crop",
  "Agua de Limón":
    "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=200&h=200&fit=crop",
  "Guacamole con Totopos":
    "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=200&h=200&fit=crop",
  "Nachos Supremos":
    "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&h=200&fit=crop",
  "Esquites Premium":
    "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=200&h=200&fit=crop",
  "Tabla de Quesos Artesanales":
    "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=200&h=200&fit=crop",
  "Tostada de Atún Fresco":
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop",
  "Tostada de Aguachile":
    "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=200&h=200&fit=crop",
  "Tostada de Pulpo":
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=200&fit=crop",
  "Salmón al Mango":
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=200&fit=crop",
  "Pulpo Zarandeado":
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=200&fit=crop",
  "Camarones a la Diabla":
    "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=200&h=200&fit=crop",
  "Rib Eye Premium":
    "https://images.unsplash.com/photo-1558030006-450675393462?w=200&h=200&fit=crop",
  "Arrachera Marinada":
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop",
  "Molcajete Mar y Tierra":
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=200&h=200&fit=crop",
  "Hamburguesa Gourmet":
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop",
  "Tacos de Rib Eye":
    "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=200&h=200&fit=crop",
  "Tacos de Arrachera":
    "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=200&h=200&fit=crop",
  "Tacos de Picanha":
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=200&h=200&fit=crop",
  "Taco de Pulpo Zarandeado":
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=200&fit=crop",
  "Taco de Camarón Tempura":
    "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=200&h=200&fit=crop",
  "Margarita Clásica":
    "https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=200&h=200&fit=crop",
  "Mojito de Maracuyá":
    "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=200&h=200&fit=crop",
  "Mezcalita Toronja":
    "https://images.unsplash.com/photo-1587223962217-f4e4612c1e6b?w=200&h=200&fit=crop",
  "Negroni Ahumado":
    "https://images.unsplash.com/photo-1574056932095-24bbcfdd4253?w=200&h=200&fit=crop",
  "Cerveza Nacional":
    "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=200&h=200&fit=crop",
  "Cerveza Premium":
    "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=200&h=200&fit=crop",
  "Cerveza Artesanal":
    "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=200&h=200&fit=crop",
  "Limonada de Frutos Rojos":
    "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=200&h=200&fit=crop",
  "Naranjada con Hierbabuena":
    "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=200&h=200&fit=crop",
  "Agua de Horchata":
    "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=200&h=200&fit=crop",
  "Churros con Chocolate":
    "https://images.unsplash.com/photo-1624371414361-e670246e0773?w=200&h=200&fit=crop",
  "Pastel de Tres Leches":
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=200&fit=crop",
  "Flan Napolitano":
    "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=200&h=200&fit=crop",
  "Helado Artesanal":
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200&h=200&fit=crop",
  "Café Americano":
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop",
  "Carajillo Licor 43":
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=200&h=200&fit=crop",
  "Carajillo de Baileys":
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=200&h=200&fit=crop",
  "Mezcal Cenizo (1 oz)":
    "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=200&h=200&fit=crop",
};

export const menuThemes = {
  esencial: {
    plan: "Esencial",
    restaurantName: "Tacos El Patrón",
    restaurantSubtitle: "Food Truck & Antojitos",
    restaurantDesc:
      "Auténticos tacos al pastor y antojitos mexicanos, hechos al momento en nuestro food truck",
    logoInitial: "P",
    heroImage:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&h=500&fit=crop",
    schedule: "Mar–Dom 6:00 pm – 12:00 am",
    showSearch: false,
    showPromotions: false,
    showSubcategories: false,
    showItemModal: false,
    showBranchPicker: false,
    fontSerif: false,
    colors: {
      primary: "#f59e0b",
      primaryLight: "#fbbf24",
      primaryMuted: "rgba(245, 158, 11, 0.5)",
      primaryFaint: "rgba(245, 158, 11, 0.15)",
      primaryGhost: "rgba(245, 158, 11, 0.08)",
      headerBg:
        "linear-gradient(135deg, rgba(15, 15, 15, 0.97) 0%, rgba(30, 20, 10, 0.97) 100%)",
      heroBg:
        "linear-gradient(180deg, #0a0a0a 0%, #1a1008 40%, #0f0d0a 100%)",
      sectionBg: "#0a0a0a",
      cardBg:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))",
      cta: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      ctaText: "#0a0a0a",
      navBg:
        "linear-gradient(135deg, rgba(15, 13, 10, 0.98), rgba(30, 20, 10, 0.98))",
    },
    waHire:
      "¡Hola! Me interesa el Plan Esencial de menú digital ($3,999 MXN) 🌮",
    waOrder: "Hola, vi el menú de Tacos El Patrón y quiero hacer un pedido",
    infoItems: [
      { label: "Horario", value: "6:00 pm – 12:00 am" },
      { label: "Servicio", value: "Para llevar" },
      { label: "Ubicación", value: "Roma Norte, CDMX" },
    ],
  },
  pro: {
    plan: "Pro",
    restaurantName: "La Trattoria",
    restaurantSubtitle: "Ristorante & Bar",
    restaurantDesc:
      "Una experiencia gastronómica única con los mejores ingredientes de temporada",
    logoInitial: "T",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=500&fit=crop",
    schedule: "Lun–Dom 1:00 pm – 12:00 am",
    showSearch: true,
    showPromotions: true,
    showSubcategories: true,
    showItemModal: true,
    showBranchPicker: false,
    fontSerif: true,
    colors: {
      primary: "#d4af37",
      primaryLight: "#f5e6b8",
      primaryMuted: "rgba(212, 175, 55, 0.5)",
      primaryFaint: "rgba(212, 175, 55, 0.15)",
      primaryGhost: "rgba(212, 175, 55, 0.08)",
      headerBg:
        "linear-gradient(135deg, rgba(15, 15, 15, 0.97) 0%, rgba(25, 20, 15, 0.97) 100%)",
      heroBg:
        "linear-gradient(180deg, #0a0a0a 0%, #1a1510 40%, #0f0d0a 100%)",
      sectionBg: "#0a0a0a",
      cardBg:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))",
      cta: "linear-gradient(135deg, #d4af37, #c4a030)",
      ctaText: "#0a0a0a",
      navBg:
        "linear-gradient(135deg, rgba(15, 13, 10, 0.98), rgba(25, 20, 15, 0.98))",
    },
    waHire:
      "¡Hola! Me interesa el Plan Pro de menú digital ($7,999 MXN) 🍽️",
    waOrder:
      "Hola, me gustaría preguntar sobre el menú de La Trattoria",
    infoItems: [
      { label: "Horario", value: "1:00 pm – 12:00 am" },
      { label: "Servicio", value: "En sitio & Terraza" },
      { label: "Reservas", value: "WhatsApp" },
    ],
    promotions: [
      {
        title: "2x1 en Margaritas",
        desc: "Todos los martes de 5pm a 8pm disfruta de nuestras margaritas al 2x1.",
        badge: "Martes",
      },
      {
        title: "Botana Gratis",
        desc: "En la compra de cualquier botella, llévate una botana de cortesía.",
        badge: "Especial",
      },
      {
        title: "Happy Hour Cocktails",
        desc: "Cócteles de la casa con 30% de descuento de lunes a jueves de 4pm a 7pm.",
        badge: "L-J",
      },
    ],
  },
  premium: {
    plan: "Premium",
    restaurantName: "Grupo Sakura",
    restaurantSubtitle: "Restaurante Japonés · 3 sucursales",
    restaurantDesc:
      "Alta cocina japonesa contemporánea con ingredientes importados y servicio de nivel internacional",
    logoInitial: "S",
    heroImage:
      "https://images.unsplash.com/photo-1579027989536-b7b3f8758f5b?w=900&h=500&fit=crop",
    schedule: "Lun–Dom 12:00 pm – 11:00 pm",
    showSearch: true,
    showPromotions: true,
    showSubcategories: true,
    showItemModal: true,
    showBranchPicker: true,
    fontSerif: true,
    colors: {
      primary: "#a78bfa",
      primaryLight: "#c4b5fd",
      primaryMuted: "rgba(167, 139, 250, 0.5)",
      primaryFaint: "rgba(167, 139, 250, 0.15)",
      primaryGhost: "rgba(167, 139, 250, 0.08)",
      headerBg:
        "linear-gradient(135deg, rgba(10, 8, 20, 0.97) 0%, rgba(20, 15, 35, 0.97) 100%)",
      heroBg:
        "linear-gradient(180deg, #0a0814 0%, #15101f 40%, #0d0b14 100%)",
      sectionBg: "#0a0814",
      cardBg:
        "linear-gradient(135deg, rgba(167, 139, 250, 0.04), rgba(255, 255, 255, 0.01))",
      cta: "linear-gradient(135deg, #7c3aed, #a78bfa)",
      ctaText: "#ffffff",
      navBg:
        "linear-gradient(135deg, rgba(10, 8, 20, 0.98), rgba(20, 15, 35, 0.98))",
    },
    waHire:
      "¡Hola! Me interesa el Plan Premium de menú digital ($14,999 MXN) 🏢",
    waOrder: "Hola, vi el menú de Grupo Sakura y me gustaría reservar",
    infoItems: [
      { label: "Horario", value: "12:00 pm – 11:00 pm" },
      { label: "Servicio", value: "En sitio & Delivery" },
      { label: "Sucursales", value: "3 ubicaciones" },
    ],
    branches: [
      { id: "polanco", name: "Polanco", address: "Av. Presidente Masaryk" },
      { id: "condesa", name: "Condesa", address: "Av. Tamaulipas 45" },
      { id: "santa-fe", name: "Santa Fe", address: "Centro Comercial Samara" },
    ],
    promotions: [
      {
        title: "Omakase del Chef",
        desc: "Menú degustación de 7 tiempos con maridaje incluido los viernes.",
        badge: "Viernes",
      },
      {
        title: "2x1 en Rolls",
        desc: "Todos los miércoles 2x1 en rolls seleccionados de la casa.",
        badge: "Miércoles",
      },
      {
        title: "Happy Hour Sake",
        desc: "Sake premium con 25% de descuento de 5pm a 7pm entre semana.",
        badge: "L–V",
      },
    ],
  },
};

export const branchOverrides = {
  polanco: {
    priceMultiplier: 1.15,
    schedule: "Lun–Sáb 1:00 pm – 12:00 am",
    itemTags: {
      "Rib Eye Premium": "Exclusivo",
      "Negroni Ahumado": "Favorito local",
      "Tabla de Quesos Artesanales": "Recomendado",
    },
    unavailable: ["Hamburguesa Gourmet"],
  },
  condesa: {
    priceMultiplier: 1.0,
    schedule: "Lun–Dom 12:00 pm – 11:00 pm",
    itemTags: {
      "Mojito de Maracuá": "Favorito local",
      "Churros con Chocolate": "Más vendido",
    },
    unavailable: [],
  },
  "santa-fe": {
    priceMultiplier: 1.08,
    schedule: "Lun–Vie 12:00 pm – 10:00 pm",
    itemTags: {
      "Molcajete Mar y Tierra": "Favorito local",
      "Carajillo Licor 43": "Más vendido",
    },
    unavailable: ["Cerveza Artesanal", "Tostada de Pulpo"],
  },
};

export const esencialMenuCategories = [
  {
    id: "tacos",
    name: "Tacos",
    icon: "🌮",
    description: "Hechos al momento en tortilla de maíz",
    subcategories: [
      {
        name: "Tacos",
        items: [
          {
            name: "Taco de Pastor",
            desc: "Cerdo marinado con piña, cilantro y cebolla en tortilla de maíz",
            price: 28,
            tag: "Popular",
          },
          {
            name: "Taco de Bistec",
            desc: "Bistec de res a la plancha con cebolla asada y salsa verde",
            price: 32,
          },
          {
            name: "Taco de Suadero",
            desc: "Suadero confitado crujiente con salsa roja de la casa",
            price: 30,
            tag: "Nuevo",
          },
        ],
      },
    ],
  },
  {
    id: "antojitos",
    name: "Antojitos",
    icon: "🫔",
    description: "Clásicos mexicanos para compartir",
    subcategories: [
      {
        name: "Antojitos",
        items: [
          {
            name: "Quesadilla de Queso",
            desc: "Tortilla de harina con queso Oaxaca fundido",
            price: 45,
          },
          {
            name: "Gringa de Pastor",
            desc: "Tortilla de harina con pastor, queso y piña",
            price: 55,
            tag: "Favorito",
          },
          {
            name: "Orden de Guacamole",
            desc: "Guacamole fresco con totopos artesanales",
            price: 65,
          },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🥤",
    description: "Refrescos y aguas frescas",
    subcategories: [
      {
        name: "Bebidas",
        items: [
          { name: "Refresco", desc: "Coca-Cola, Sprite o Fanta 355 ml", price: 25 },
          {
            name: "Agua de Jamaica",
            desc: "Agua fresca de jamaica natural, 500 ml",
            price: 30,
          },
          {
            name: "Agua de Limón",
            desc: "Limonada natural con hierbabuena, 500 ml",
            price: 30,
          },
        ],
      },
    ],
  },
];

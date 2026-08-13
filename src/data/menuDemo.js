export const WA_NUMBER = "525635926679";

export function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const foodImageMap = {
  "Taco de Pastor":
    "/img/demos/photo-1551504734-5ee1c4a1479b-200x200.jpg",
  "Taco de Bistec":
    "/img/demos/photo-1624300629298-e9de39c13be5-200x200.jpg",
  "Taco de Suadero":
    "/img/demos/photo-1599974579688-8dbdd335c77f-200x200.jpg",
  "Quesadilla de Queso":
    "/img/demos/photo-1618040996337-56904b7850b9-200x200.jpg",
  "Gringa de Pastor":
    "/img/demos/photo-1565299585323-38d6b0865b47-200x200.jpg",
  "Orden de Guacamole":
    "/img/demos/photo-1615870216519-2f9fa575fa5c-200x200.jpg",
  "Refresco":
    "/img/demos/photo-1533007716222-4b465613a984-200x200.jpg",
  "Agua de Jamaica":
    "/img/demos/photo-1541658016709-82535e94bc69-200x200.jpg",
  "Agua de Limón":
    "/img/demos/photo-1621263764928-df1444c5e859-200x200.jpg",
  "Guacamole con Totopos":
    "/img/demos/photo-1615870216519-2f9fa575fa5c-200x200.jpg",
  "Nachos Supremos":
    "/img/demos/photo-1513456852971-30c0b8199d4d-200x200.jpg",
  "Esquites Premium":
    "/img/demos/photo-1551462147-ff29053bfc14-200x200.jpg",
  "Tabla de Quesos Artesanales":
    "/img/demos/photo-1452195100486-9cc805987862-200x200.jpg",
  "Tostada de Atún Fresco":
    "/img/demos/photo-1579871494447-9811cf80d66c-200x200.jpg",
  "Tostada de Aguachile":
    "/img/demos/photo-1535399831218-d5bd36d1a6b3-200x200.jpg",
  "Tostada de Pulpo":
    "/img/demos/photo-1565557623262-b51c2513a641-200x200.jpg",
  "Salmón al Mango":
    "/img/demos/photo-1467003909585-2f8a72700288-200x200.jpg",
  "Pulpo Zarandeado":
    "/img/demos/photo-1565557623262-b51c2513a641-200x200.jpg",
  "Camarones a la Diabla":
    "/img/demos/photo-1625943553852-781c6dd46faa-200x200.jpg",
  "Rib Eye Premium":
    "/img/demos/photo-1558030006-450675393462-200x200.jpg",
  "Arrachera Marinada":
    "/img/demos/photo-1544025162-d76694265947-200x200.jpg",
  "Molcajete Mar y Tierra":
    "/img/demos/photo-1599974579688-8dbdd335c77f-200x200.jpg",
  "Hamburguesa Gourmet":
    "/img/demos/photo-1568901346375-23c9450c58cd-200x200.jpg",
  "Tacos de Rib Eye":
    "/img/demos/photo-1551504734-5ee1c4a1479b-200x200.jpg",
  "Tacos de Arrachera":
    "/img/demos/photo-1624300629298-e9de39c13be5-200x200.jpg",
  "Tacos de Picanha":
    "/img/demos/photo-1599974579688-8dbdd335c77f-200x200.jpg",
  "Taco de Pulpo Zarandeado":
    "/img/demos/photo-1565557623262-b51c2513a641-200x200.jpg",
  "Taco de Camarón Tempura":
    "/img/demos/photo-1625943553852-781c6dd46faa-200x200.jpg",
  "Margarita Clásica":
    "/img/demos/photo-1556855810-ac404aa91e85-200x200.jpg",
  "Mojito de Maracuyá":
    "/img/demos/photo-1551538827-9c037cb4f32a-200x200.jpg",
  "Mezcalita Toronja":
    "/img/demos/photo-1618799805265-4f27cb61ede9-200x200.jpg",
  "Negroni Ahumado":
    "/img/demos/photo-1626688445658-c948f32d68ba-200x200.jpg",
  "Cerveza Nacional":
    "/img/demos/photo-1535958636474-b021ee887b13-200x200.jpg",
  "Cerveza Premium":
    "/img/demos/photo-1608270586620-248524c67de9-200x200.jpg",
  "Cerveza Artesanal":
    "/img/demos/photo-1566633806327-68e152aaf26d-200x200.jpg",
  "Limonada de Frutos Rojos":
    "/img/demos/photo-1621263764928-df1444c5e859-200x200.jpg",
  "Naranjada con Hierbabuena":
    "/img/demos/photo-1534353473418-4cfa6c56fd38-200x200.jpg",
  "Agua de Horchata":
    "/img/demos/photo-1541658016709-82535e94bc69-200x200.jpg",
  "Churros con Chocolate":
    "/img/demos/photo-1624371414361-e670edf4898d-200x200.jpg",
  "Pastel de Tres Leches":
    "/img/demos/photo-1464349095431-e9a21285b5f3-200x200.jpg",
  "Flan Napolitano":
    "/img/demos/photo-1528975604071-b4dc52a2d18c-200x200.jpg",
  "Helado Artesanal":
    "/img/demos/photo-1497034825429-c343d7c6a68f-200x200.jpg",
  "Café Americano":
    "/img/demos/photo-1509042239860-f550ce710b93-200x200.jpg",
  "Carajillo Licor 43":
    "/img/demos/photo-1514362545857-3bc16c4c7d1b-200x200.jpg",
  "Carajillo de Baileys":
    "/img/demos/photo-1514362545857-3bc16c4c7d1b-200x200.jpg",
  "Mezcal Cenizo (1 oz)":
    "/img/demos/photo-1569529465841-dfecdab7503b-200x200.jpg",
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
      "/img/demos/photo-1565299585323-38d6b0865b47-900x500.jpg",
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
      "¡Hola! Me interesa el Plan Esencial de menú digital ($2,499 MXN) 🌮",
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
      "/img/demos/photo-1517248135467-4c7edcad34c4-900x500.jpg",
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
      "/img/demos/photo-1635321594488-2d38af11ed03-900x500.jpg",
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

import hero from "./assets/hero.jpg";
import soaps from "./assets/soaps.jpg";
import swag from "./assets/swag.jpg";
import lotions from "./assets/lotions.jpg";
import citrus from "./assets/citrus.png";
import botanical from "./assets/botanical.png";
import charcoal from "./assets/charcoal.png";

export const sliderItems = [
  {
    id: 1,
    img: hero,
    title: "GET READY TO REFRESH",
    desc: "Pair those champagne bubbles with the perfect soapy suds this New Year's.",
    bg: "f5fafd",
  },
];

export const categories = [
  {
    id: 1,
    img: soaps,
    title: "SOAPS",
    cat: "Soaps",
  },
  {
    id: 2,
    img: swag,
    title: "SWAG",
    cat: "Swag",
  },
  {
    id: 3,
    img: lotions,
    title: "LOTIONS",
    cat: "Lotions",
  },
];

export const popularProducts = [
  {
    id: "62009e8daff5882e80135c59",
    title: "Citrus Bar",
    img: citrus,
    desc: "Locally made in Vancouver, BC with ethically-sourced, all natural ingredients.  Free of palm oil, artificial colours or fragrances.  Discontinue use if any irritation occurs.",
    categories: ["Soaps", "Swag", "Lotions"],
    size: ["Small", "Medium", "Large"],
    price: 9,
    ingredients:
      "OLEA EUROPEA (OLIVE) OIL, SODIUM HYDROXIDE, COCOS NUCIFERA (COCONUT OIL) OIL, MACADAMIA, TERNIFOLIA (MACADAMIA) SEED OIL, BUTRYROSPEMUM PARKII (SHEA) BUTTER, KAOLIN (PINK CLAY), LAVANDULA ANGUSTIFOLIA (LAVENDER), CEDRUS DEODORA (CEDARWOOD), WOOD OIL.",
  },
  {
    id: "62009e8daff5882e80135c58",
    title: "Botanical Bar",
    img: botanical,
    desc: "Locally made in Vancouver, BC with ethically-sourced, all natural ingredients.  Free of palm oil, artificial colours or fragrances.  Discontinue use if any irritation occurs.",
    categories: ["Soaps", "Swag", "Lotions"],
    size: ["Small", "Medium", "Large"],
    price: 9,
    ingredients:
      "OLEA EUROPEA (OLIVE) OIL, SODIUM HYDROXIDE, COCOS NUCIFERA (COCONUT OIL) OIL, MACADAMIA, TERNIFOLIA (MACADAMIA) SEED OIL, BUTRYROSPEMUM PARKII (SHEA) BUTTER, KAOLIN (PINK CLAY), LAVANDULA ANGUSTIFOLIA (LAVENDER), CEDRUS DEODORA (CEDARWOOD), WOOD OIL.",
  },
  {
    id: "62009e8daff5882e80135c58",
    title: "Charcoal Bar",
    img: charcoal,
    desc: "Locally made in Vancouver, BC with ethically-sourced, all natural ingredients.  Free of palm oil, artificial colours or fragrances.  Discontinue use if any irritation occurs.",
    categories: ["Soaps", "Swag", "Lotions"],
    size: ["Small", "Medium", "Large"],
    price: 9,
    ingredients:
      "OLEA EUROPEA (OLIVE) OIL, SODIUM HYDROXIDE, COCOS NUCIFERA (COCONUT OIL) OIL, MACADAMIA, TERNIFOLIA (MACADAMIA) SEED OIL, BUTRYROSPEMUM PARKII (SHEA) BUTTER, KAOLIN (PINK CLAY), LAVANDULA ANGUSTIFOLIA (LAVENDER), CEDRUS DEODORA (CEDARWOOD), WOOD OIL.",
  },
];

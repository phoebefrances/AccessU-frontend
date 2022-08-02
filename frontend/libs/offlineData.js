//This is in the format our API data would be after initial destructuring (which would happen in getPlacesData.js)
// You can check the correctness of this format by comparing it to the console.dir in index.js
export const places = [
  {
    category: "restaurant",
    name: "The Breakfast Club Soho",
    rating: "5.0",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",
    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13521278619092814",
    latitude: "51.51226090514994",
    acessibility: {
      step_free: {
        token: "step_free",
        label: "This venue has step-free access.",
      },
      braille: {
        token: "braille",
        label: "This venue has materials printed in Braille alphabet.",
      },
      sign_lang: {
        token: "sign_lang",
        label: "This venue employs staff who know British Sign Language.",
      },
      quiet: {
        token: "quiet",
        label: "This venue has a quiet zone.",
      },
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.breakfastclub.com",
    opening_times: "7am-7pm",
  },
  {
    category: "cinema",
    name: "Prince Charles Cinema",
    rating: "4.0",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13042340946513464",
    latitude: "51.51184071143942",
    acessibility: {
      braille: {
        token: "braille",
        label: "This venue has materials printed in Braille alphabet.",
      },
      sign_lang: {
        token: "sign_lang",
        label: "This venue employs staff who know British Sign Language.",
      },
      quiet: {
        token: "quiet",
        label: "This venue has a quiet zone.",
      },
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.princecharles.com",
    opening_times: "7am-7pm",
  },
  {
    category: "shop",
    name: "Big Sainsburys",
    rating: "3.0",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.1386631551988991",
    latitude: "51.51787642984117",
    acessibility: {
      braille: {
        token: "braille",
        label: "This venue has materials printed in Braille alphabet.",
      },
      sign_lang: {
        token: "sign_lang",
        label: "This venue employs staff who know British Sign Language.",
      },
      quiet: {
        token: "quiet",
        label: "This venue has a quiet zone.",
      },
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.sainsburys.com",
    opening_times: "7am-7pm",
  },
  {
    category: "gym",
    name: "Alpha Lobster Gym",
    rating: "3.0",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13119588562767506",
    latitude: "51.51683492491375",
    acessibility: {
      step_free: {
        token: "step_free",
        label: "This venue has step-free access.",
      },
      quiet: {
        token: "quiet",
        label: "This venue has a quiet zone.",
      },
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.all-hail-the-lobster.com",
    opening_times: "7am-7pm",
  },
  {
    category: "café",
    name: "Roasted Beanz",
    rating: "1.0",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.1381910864329022",
    latitude: "51.50871571116749",
    acessibility: {
      step_free: {
        token: "step_free",
        label: "This venue has step-free access.",
      },
      quiet: {
        token: "quiet",
        label: "This venue has a quiet zone.",
      },
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.roastedbeanz.com",
    opening_times: "7am-7pm",
  },
];

/*Big card (master template):
-Name ✅ 
-Category (cinema, restaurant, gym, shop, café) ✅ 
- Street address (with postcode) ✅ 
-Accessibility badges (step-free, braille, sing_language, quiet_space) ✅ 
-Accesibility labels (one for each badge) ✅ 
-phone number ✅
-web address ✅
-opening times ✅
-picture ✅ */

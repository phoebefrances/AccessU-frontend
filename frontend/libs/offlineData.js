//This is to be plugged into our components in place of variable data

export let data = [
  {
    category: "restaurant",
    name: "The Breakfast Club Soho",
    price: "$5 - $20",
    rating: "5.0",
    // num_reviews: "69",
    // price_level: "$$ - $$$",
    // ranking: "no 1 traphouse in da hood",
    // open_now_text: "open now",
    // dietary_restrictions: [{ key: "10665", name: "Vegetarian Friendly" }],
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",
    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13521278619092814",
    latitude: "51.51226090514994",
    accessibility_tokens: ["step_free", "braille", "sign_lang", "quiet"],
  },
  {
    category: "cinema",
    name: "Prince Charles Cinema",
    price: "$5 - $20",
    rating: "4.0",
    // num_reviews: "69",
    // price_level: "$$ - $$$",
    // ranking: "no 1 traphouse in da hood",
    // open_now_text: "open now",
    // dietary_restrictions: [{ key: "10665", name: "Vegetarian Friendly" }],
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13042340946513464",
    latitude: "51.51184071143942",
    accessibility_tokens: ["step_free", "braille", "sign_lang", "quiet"],
  },
  {
    category: "shop",
    name: "Big Sainsburys",
    price: "$5 - $20",
    rating: "3.0",
    // num_reviews: "69",
    // price_level: "$$ - $$$",
    // ranking: "no 1 traphouse in da hood",
    // open_now_text: "open now",
    // dietary_restrictions: [{ key: "10665", name: "Vegetarian Friendly" }],
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.1386631551988991",
    latitude: "51.51787642984117",
    accessibility_tokens: ["step_free"],
  },
  {
    category: "gym",
    name: "Alpha Lobster Gym",
    price: "$5 - $20",
    rating: "3.0",
    // num_reviews: "69",
    // price_level: "$$ - $$$",
    // ranking: "no 1 traphouse in da hood",
    // open_now_text: "open now",
    // dietary_restrictions: [{ key: "10665", name: "Vegetarian Friendly" }],
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13119588562767506",
    latitude: "51.51683492491375",
    accessibility_tokens: ["sign_lang", "quiet"],
  },
  {
    category: "café",
    name: "Roasted Beanz",
    price: "$5 - $20",
    rating: "1.0",
    // num_reviews: "69",
    // price_level: "$ - $$",
    // ranking: "no 1 traphouse in da hood",
    // open_now_text: "open now",
    // dietary_restrictions: [{ key: "10665", name: "Vegetarian Friendly" }],
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.1381910864329022",
    latitude: "51.50871571116749",
    accessibility_tokens: ["step_free", "braille", "quiet"],
  },
];

/*Big card (master template):
-Name
-Category (cinema, restaurant, gym, shop, café)
- Street address (with postcode)
-Accessibility badges (step-free, braille, sing_language, quiet_space)
-Accesibility labels (one for each badge)
-phone number
-web address
-opening times
-picture */

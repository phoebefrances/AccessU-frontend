//This is to be plugged into our components in place of variable data

export let data = [
  {
    name: "Your mum's house",
    price: "$5 - $20",
    rating: "5.0",
    num_reviews: "69",
    price_level: "$$ - $$$",
    ranking: "no 1 traphouse in da hood",
    open_now_text: "open now",
    dietary_restrictions: [{ key: "10665", name: "Vegetarian Friendly" }],
    photo: {
      images: {
        large: {
          width: "828",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/4c/1f/f8/wagyu-japones.jpg",
          height: "461",
        },
      },
    },
    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.988513",
    latitude: "51.999294",
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

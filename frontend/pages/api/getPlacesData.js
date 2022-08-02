import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_TRAVEL_ADVISER_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};

// Hard coded data
// // const options = {

// //   params: {
// //     bl_latitude: '11.847676',
// //     tr_latitude: '12.838442',
// //     bl_longitude: '109.095887',
// //     tr_longitude: '109.149359',
// //   },
// //   headers: {
// //     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
// //     'X-RapidAPI-Key': '5ca8a0137cmshc18f81acd4fe5d5p1c075ejsne76a29a7fc52'
// //   }
// // };

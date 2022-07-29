import axios from "axios";

const url = 
'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    
params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': '5ca8a0137cmshc18f81acd4fe5d5p1c075ejsne76a29a7fc52',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

export const getPlacesData = async () => {
    try {
        const {data: {data}, 
    }= await axios.get(url, options)
    return data; 
    } catch (error) {
        console.log(`Fetch data Error: ${error}`);
    }
}
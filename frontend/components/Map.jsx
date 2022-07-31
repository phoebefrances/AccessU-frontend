import React from "react";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react"
import { IoLocation } from "react-icons/io5";

const Map = ({coordinates, setCoordinates, setBounds, places}) => {

  //This state updates when you click the Iolocation icon for a particular place, that place icon will update from not having a card to having a card i.e. from false to true 
  const [isCard, setisCard] = useState(false)

  //This state updates the card for the icon of a particular place from not having any details to having details i.e. from null to '*Whatever details are fetched*'
  const [cardData, setcardData] = useState(null)

  return ( <Box width={"full"} height={"full"}>

  <GoogleMapReact
    bootstrapURLKeys={{  key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}}
    defaultCenter={coordinates}
    center= {coordinates}
    defaultZoom= {10}
    margin= {[50, 50, 50, 50]}
    options= {""}
    onChange= {(e) => {
      console.log(e)
      setCoordinates({lat : e.center.lat, lng: e.center.lng})
      setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
    }}
    onChildClick= {(child) => {log}}
  >
    {places?.map((place, i) => (
          <Box
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            position={"relative"}
            cursor="pointer"
          >
            <IoLocation color="red" fontSize={30} />
          </Box>
        ))}
  </GoogleMapReact>
  </Box>
  );
};

export default Map;

import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import LargeCard from "./LargeCard";

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  //This state changes from false to true when a pin/marker (IoLocation in the code) is clicked, indicating that a venue has been selected
  const [isCard, setIsCard] = useState(false);

  //This state holds the details of the venue that has been selected. This is later passed to Large Card to be displayed.
  const [cardData, setCardData] = useState(null);

  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{
          styles: require("../libs/map-style1.json"),
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        //added click event by setting setCardData to places and passed the child as an array to places to get the index number (not getting an object) and set setisCard to true
        onChildClick={(child) => {
          setCardData(places[child]);
          setIsCard(true);
        }}
        //This kills the big card when the user clicks away from it (i.e. when they click anywhere on the map)
        onClick={() => {
          setIsCard(false);
        }}
      >
        {places?.map((place, i) => (
          <Box
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            position={"relative"}
            cursor="pointer"
          >
            <IoLocation color="#2C2C68" fontSize={30} />
          </Box>
        ))}

        {/* Conditionally rendered the LargeCard component if isCard is true  */}
        {isCard && <LargeCard cardData={cardData} />}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;

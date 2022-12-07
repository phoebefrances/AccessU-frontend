import React, { useState, useContext } from "react";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import LargeCard from "./LargeCard";
import { MapStyleContext } from "./MapStyleContext";

const Map = ({
  coordinates,
  places,
  isCard,
  setIsCard,
  cardData,
  setCardData,
  rating,
  setRating,
}) => {
  const [mapStyle, SetMapStyle] = useContext(MapStyleContext);

  return (
    <Box className="map-box" width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={mapStyle}
    
        //added click event by setting setCardData to places and passed the child as an array to places to get the index number (not getting an object) and set setisCard to true
        onChildClick={(child) => {
          setCardData(places[child]);
          setIsCard(true);
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
            <IoLocation color="#032396" fontSize={38} />
          </Box>
        ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;

import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import { BiX } from "react-icons/bi";

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
   //This state updates when you click the Iolocation icon for a particular place, that place icon will update from not having a card to having a card i.e. from false to true 
  const [isCard, setIsCard] = useState(false);

  //This state updates the card for the icon of a particular place from not having any details to having details i.e. from null to '*Whatever details are fetched*'
  const [cardData, setCardData] = useState(null);
  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        //added click event by setting setCardData to places and passed the child as an array to places to get the index number (not getting an object) and set setisCard to true 
        onChildClick={(child) => {
          setCardData(places[child]);
          setIsCard(true);
        }}
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

          {/* Conditionally rendered the Box chakra component if isCard is true  */}
        {isCard && (
          <Box
            width={"200px"}
            height={"150px"}
            bg={"whiteAlpha.900"}
            position={"absolute"}
            top={-12}
            left={0}
            shadow={"lg"}
            rounded={"lg"}
          >

           {/* Chakra Image component to display place Image on small card */}
            <Image
              objectFit={"cover"}
              width={"full"}
              height={"120px"}
              rounded="lg"
              src={
                cardData?.photo
                  ? cardData?.photo?.images?.large?.url
                  : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
              }
            />
            
            {/* Chakra Text component to display place name details on small card */}
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated
            >
              {cardData.name}
            </Text>

            <Box
              cursor={"pointer"}
              position={"absolute"}
              top={2}
              right={2}
              width={"30px"}
              height={"30px"}
              bg={"red.300"}
              rounded={"full"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={() => {
                setIsCard(false);
              }}
            >
              <BiX fontSize={20} />
            </Box>
          </Box>
        )}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;




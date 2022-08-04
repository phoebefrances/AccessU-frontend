import React, { useState } from "react";
import { Box, Image, Spacer, Text } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import { BiX } from "react-icons/bi";
import places from "../libs/offlineData.js"
import { Rating } from "@material-ui/lab";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";


const Map = ({ coordinates, setCoordinates, setBounds, places, place}) => {
   //This state updates when you click the Iolocation icon for a particular place, that place icon will update from not having a card to having a card i.e. from false to true 
  const [isCard, setIsCard] = useState(false);

  //This state updates the card for the icon of a particular place from not having any details to having details i.e. from null to '*Whatever details are fetched*'
  const [cardData, setCardData] = useState(null);

  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}}
        // icon={url: 'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png'}
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
            <IoLocation color="#032396" fontSize={30} />
          </Box>
        ))}

          {/* Conditionally rendered the Box chakra component if isCard is true  */}
        {isCard && (
          <Box
            width={"200px"}
            height={"500px"}
            bg={"whiteAlpha.900"}
            position={"relative"}
            top={-20}
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
              src={cardData.photo}
            />
            
            {/* Chakra Text component to display place name details on small card */}
            
            <Text
              textTransform={"capitalize"}
              width={"40"}
              height={"20px"}
              fontSize={"12px"}
              fontWeight={"500"}
              isTruncated
              color={"#2C2C68"}
            >
              {cardData.category}
              </Text>
              <Text
              textTransform={"capitalize"}
              width={"40"}
              height={"20px"}
              fontSize={"12px"}
              fontWeight={"500"}
              isTruncated
              color={"#2C2C68"}
            >
              {cardData.name}
              </Text>
              <Text
              textTransform={"capitalize"}
              width={"40"}
              height={"20px"}
              fontSize={"12px"}
              fontWeight={"500"}
              isTruncated
              color={"#2C2C68"}
            >
             <Rating size="small" value={Number(cardData.rating)} readOnly />
              </Text>
              <Spacer />
              <Text
              textTransform={"capitalize"}
              width={"40"}
              height={"20px"}
              fontSize={"12px"}
              fontWeight={"500"}
              isTruncated
              color={"#2C2C68"}
            >
              {cardData.address}

            </Text>
            <br></br>
            <Text
              textTransform={"capitalize"}
              width={"40"}
              height={"10px"}
              fontSize={"12px"}
              fontWeight={"500"}
              isTruncated
              color={"#2C2C68"}
            >
              {cardData.phone_number}

            </Text>
            <Spacer />
            <br></br>
            <Text
              textTransform={"capitalize"}
              width={"40"}
              height={"20px"}
              fontSize={"12px"}
              fontWeight={"500"}
              isTruncated
              color={"#2C2C68"}
            >
              {cardData.web_address}

            </Text>
            <br></br>
            <Text
              textTransform={"capitalize"}
              width={"40"}
              height={"20px"}
              fontSize={"12px"}
              fontWeight={"500"}
              isTruncated
              color={"#2C2C68"}
            >
              {cardData.opening_times}

            </Text>
            <br></br>
            <SignLanguageIcon color={"#032396"} fontSize="large"/>
            <HearingIcon fontSize="large" />
            <RemoveRedEyeIcon fontSize="large" />
            <AccessibleIcon fontSize="large" />
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




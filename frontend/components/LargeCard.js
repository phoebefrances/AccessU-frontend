import React, { useState } from "react";
import {
  Box,
  Image,
  Spacer,
  Text,
  Flex,
  Divider,
  Center,
} from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { BiX } from "react-icons/bi";
import { ExternalLinkIcon } from "@chakra-ui/icons";

//Icon imports:

import AccessibleIcon from "@mui/icons-material/Accessible";
import HearingIcon from "@mui/icons-material/Hearing";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarRating from "./StarRating";

const LargeCard = ({ cardData, setIsCard, rating, setRating, reviewData }) => {
  // get the place is from our cardData object that is passed to this component
  let selectedPlace = cardData.id;
  // Create an empty array to store all the ratings for that specific place. This is later used to calculate average
  let averageRating = [];
  reviewData.map((rating, i) => {
    //filter out ONLY places that match the CURRENT place_id ,and find their star rating
    if (selectedPlace == rating.place_id) {
      // console.log(
      //   i,
      //   ` rating is `,
      //   rating.rating,
      //   "place id is",
      //   rating.place_id
      // );
      //then push the star rating for that place into the array
      averageRating.push(rating.rating);
    }
  });
  //use reducer to loop through the N number of ratings and calculate the average
  const average =
    averageRating.reduce((a, b) => a + b, 0) / averageRating.length;
  //the average constant will now replace the value for the Rating component in our render.
  // console.log('Average Rating Array isss.....', average)

  return (
    <Box
      bg="white"
      height="690px"
      width="250px"
      position="absolute"
      left="470px" //This left-offset is the width of the List + 20px. This means it will always be 20px away from the List.
      borderRadius="15"
      border="2px"
      borderColor={`#FF9100`}
    >
      {/* This is the close-card X button */}
      <Box
        cursor={"pointer"}
        position={"absolute"}
        top={2}
        right={2}
        width={"30px"}
        height={"30px"}
        bgGradient="linear(to-tr, #17CEDA, #0954a9, #032396)" //this gradient works better on this small element than the gradient in OurButton
        rounded={"full"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          setIsCard(false);
          setRating(null);
        }}
      >
        <BiX fontSize={28} color="white" />
      </Box>
      {/* Place image */}
      <Image
        alt={cardData.alt}
        objectFit="cover"
        width="full"
        height="120px"
        borderRadius="13"
        borderBottomRadius="0"
        src={cardData.photo}
      />

      <Box padding="3">
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="22px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.name}
        </Text>
        <Text
          textTransform="capitalize"
          fontSize="18px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.category}
        </Text>
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="12px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          <Rating size="small" value={Number(average)} readOnly />
        </Text>
        <Spacer />
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="14px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.address}
        </Text>

        <Text
          textTransform="capitalize"
          width="full"
          fontSize="14px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.phone_number}
        </Text>
        {/* <Spacer /> */}
        <Text
          width="full"
          fontSize="14px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          <a href={`${cardData.web_address}`} target="_blank" rel="noreferrer">
            website link <ExternalLinkIcon mx="2px" />
          </a>
        </Text>
        {/* <br></br> */}
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="14px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.opening_times}
        </Text>
        <br></br>

        <Flex width="full" direction="column" gap="3" pt={3}>
          {cardData?.accessible && (
            <Flex alignItems="center" width="full" px={1} height="25%">
              <Text color="#032396">
                <AccessibleIcon fontSize="large" />
              </Text>

              <Text fontSize="small" fontWeight={500} color="#2C2C68">
                <p>This place is wheelchair accesible</p>
              </Text>
            </Flex>
          )}
          {cardData?.eye && (
            <Flex
              alignItems={"center"}
              width={"full"}
              px={1}
              height={"25%"}
              // bg="yellow"
            >
              <Text color={"#032396"}>
                <VisibilityIcon fontSize="large" />
              </Text>
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#2C2C68"}
                ml={1}
              >
                <p>place has adjustments for visual impairments</p>
              </Text>
            </Flex>
          )}
          {cardData?.hearing && (
            <Flex alignItems={"center"} width={"full"} px={1} height={"25%"}>
              <Text color={"#032396"}>
                <HearingIcon fontSize="large" />
              </Text>
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#2C2C68"}
                ml={1}
              >
                <p>This place has adjustments for hearing impairments</p>
              </Text>
            </Flex>
          )}
          {cardData?.brain && (
            <Flex alignItems={"center"} width={"full"} px={1} height={"25%"}>
              {" "}
              <Text color={"#032396"}>
                <PsychologyIcon fontSize="large" />
              </Text>
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#2C2C68"}
                ml={1}
              >
                This place has a quiet space
              </Text>
            </Flex>
          )}
          <Center>
            <Divider
              borderColor={`#FF9100`}
              orientation="horizontal"
              width="90%"
            />
          </Center>

          <StarRating
            rating={rating}
            setRating={setRating}
            place_id={cardData.id}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default LargeCard;

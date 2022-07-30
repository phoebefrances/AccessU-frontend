import React from "react";
import { Image, Flex, Text } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";


const PlaceDetail = ({ place }) => {
  return (
    <Flex
      bg={"whiteAlpha.900"}
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      direction={"column"}
      alignItems={"start"}
      justifyContent="space-between"
    >
      <Flex justifyContent={"space-between"} width="full">
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          width="full"
          px={2}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}
          >
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
            >
              {place.name}
            </Text>

            <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"}>
              {place.price}
            </Text>
          </Flex>
             
             {/* Ratings */}
          <Flex alignItems={"center"} width={"full"}>
            <Rating size="small" value={Number(place.rating)} readOnly />
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
            >{`(${place.num_reviews})`}</Text>
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
              ml={"auto"}
            >
              {place.price_level}
            </Text>
          </Flex>
          
        </Flex>
        
      </Flex>
      <Image
          objectFit={"cover"}
          width={"120px"}
          height={"120px"}
          rounded="lg"
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
          }
        />
    </Flex>
  );
};

export default PlaceDetail;
import React from "react";
import { Flex, Text, Image, Badge } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { IoLocation } from "react-icons/io5";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from '@mui/icons-material/Psychology';
import VisibilityIcon from '@mui/icons-material/Visibility';



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

            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
            >
              

              
            </Text>


          </Flex>

          {/* Ratings */}
          <Flex alignItems={"center"} width={"full"}>
            <Rating size="small" value={Number(place.rating)} readOnly />
          </Flex>

          {/* dietary_restrictions */}
          {/* We may use this as behaviour for rendering accesibility badges */}
          {/* {place?.dietary_restrictions && (
            <Flex width={"full"} flexWrap={"wrap"}>
              {place.dietary_restrictions.map((n, i) => (
                <Badge
                  colorScheme={"teal"}
                  cursor={"pointer"}
                  key={i}
                  m={1}
                  fontSize={10}
                >
                  {n.name}
                </Badge>
              ))}
            </Flex>
          )} */}
        </Flex>
      </Flex>

      <Image
        objectFit={"cover"}
        width={"120px"}
        height={"120px"}
        rounded="lg"
        src={
          place.photo
            ? place.photo
            : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
        }
      />

      {place?.address && (
        <Flex alignItems={"center"} width={"full"} px={1} my={2}>
          <IoLocation fontSize={20} color="gray" />

          <Text fontSize={"small"} fontWeight={500} color={"gray.700"} ml={1}>
            {place.address}
          </Text>
        </Flex>
      )}

      <Flex>
      {place.acessibility?.accessible && (
        <Flex alignItems={"center"} width={"full"} px={1} my={2}>

          <Text fontSize={"small"} fontWeight={500} color={"gray.700"} ml={1}>
          
            <AccessibleIcon fontSize="large" />
          </Text>
        </Flex>

      )}
      {place.acessibility?.eye && (
        <Flex alignItems={"center"} width={"full"} px={1} my={2}>

          <Text fontSize={"small"} fontWeight={500} color={"gray.700"} ml={1}>
          
            <VisibilityIcon fontSize="large" />
          </Text>
        </Flex>
      )}
      {place.acessibility?.hearing && (
        <Flex alignItems={"center"} width={"full"} px={1} my={2}>

          <Text fontSize={"small"} fontWeight={500} color={"gray.700"} ml={1}>
          
            <HearingIcon fontSize="large" />
          </Text>
        </Flex>
      )}
      {place.acessibility?.hearing && (
        <Flex alignItems={"center"} width={"full"} px={1} my={2}>

          <Text fontSize={"small"} fontWeight={500} color={"gray.700"} ml={1}>
          
            <HearingIcon fontSize="large" />
          </Text>
        </Flex>
      )}
      </Flex> 
    </Flex>
  );
};

export default PlaceDetail;

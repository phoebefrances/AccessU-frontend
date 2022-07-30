import { Flex } from "@chakra-ui/react";
import React from "react";

const PlaceDetail = ({ place }) => {
  return <Flex
  bg={'whiteAlpha.100.900'}
  px={4}
  py={2}
  mb={2}
  shadow='lg'
  direction={'column'}
  alignItems={'start'}
  justifyContent='space-evenly'
  >
    <Flex
    justifyContent={'space-between'}
    width='full'
    >
      <Flex
      direction={'column'}
      justifyContent={'start'}
      alignItems={'start'}
      width='full'
      px={2}
      >
      <Flex 
      alignItems={'center'}
      width={'full'}
      justifyContent={'space-between'}
      >
        <Text 
        textTransform={'capitalize'}
        width={'40'}
        fontSize={'lg'}
        fontWeight={'500'}
        isTruncated
        >
          {place.name}
        </Text>
        <Text
        fontSize={'sm'}
        fontWeight={'500'}
        color={'gray.500'}
        >

        </Text>
      </Flex>
      </Flex>
    </Flex>
  </Flex>
};

export default PlaceDetail;

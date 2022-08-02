import { Box, Image, Badge } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";

function LargeCard() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Cineworld",
    category: "Cinema",
    address: "55 Bluewater Road, Manchester, M25 6HB",
    telephoneNumber: "02813849583",
    website: "www.cineworld.com",
    openingTime: "9:00 - 21:00",
    rating: 4,
  };

  return (
    <Box
      bg="white"
      position="absolute"
      width="217px"
      height="397px"
      left="530px"
      top="138px"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
        </Box>
        <Rating size="small" value={Number(property.rating)} readOnly />
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.category}
          {property.address}
          {property.telephoneNumber}
          {property.website}
          {property.openingTime}
        </Box>
        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center"></Box>
      </Box>
    </Box>
  );
}

export default LargeCard;

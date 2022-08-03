import { Box, Image, Badge } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      rounded="xl"
      border="2px"
      borderColor={`#FF9100`}
      textColor={"#2C2C68"}
      bg="white"
      position="absolute"
      width="260px"
      height="470px"
      left="530px"
      top="138px"
    >
      <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
      <Image rounded="lg" src={property.imageUrl} alt={property.imageAlt} />
      <Box p="3">
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
        </Box>
        <Box>
          <Rating size="small" value={Number(property.rating)} readOnly />
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          word-break="break-word"
          line-break="auto"
          white-space="initial"
          display="inline"
        >
          {property.address}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.telephoneNumber}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          display="inline"
        >
          {property.website}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.openingTime}
        </Box>
        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
        <Box display="flex" mt="2" alignItems="center"></Box>
      </Box>
      <Box p="3">
        <SignLanguageIcon fontSize="large" />
        <HearingIcon fontSize="large" />
        <RemoveRedEyeIcon fontSize="large" />
        <AccessibleIcon fontSize="large" />
      </Box>
    </Box>
  );
}
export default LargeCard;
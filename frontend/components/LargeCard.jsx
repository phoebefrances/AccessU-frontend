import { Box, Image, Badge } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { CloseButton } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

function LargeCard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
  
    
      <Image rounded="lg" src={property.imageUrl} alt={property.imageAlt} position= 'relative' />
      <Box p="3">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            position= 'relative'
          ></Box>
        </Box>
        <Box direction='row' spacing={6}>
  <CloseButton size='sm' position= 'absolute'
 bg={`#FF9100`}
 colorScheme='white'
 color='white'
 borderColor='white'
  // z-index= '20'
  right= '1' 
  top= '1'
  onClick= {onClose} />
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


// function SizeExample() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const [size, setSize] = React.useState('md')

//   const handleSizeClick = (newSize) => {
//     setSize(newSize)
//     onOpen()
//   }

//   const sizes = ['xs']

//   return (
//     <>
//       {sizes.map((size) => (
//         <Button
//           onClick={() => handleSizeClick(size)}
//           key={size}
//           m={4}
//         >{`Open ${size} Modal`}</Button>
//       ))}

//       <Modal onClose={onClose} size={size} isOpen={isOpen}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Lorem count={2} />
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }



export default LargeCard;

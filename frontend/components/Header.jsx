import {
  Flex,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
  Divider, 
  Center
} from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { Autocomplete } from "@react-google-maps/api";
import React, { useState } from "react";
import { TriangleDownIcon, Search2Icon} from '@chakra-ui/icons'

import {
  BiChevronDown,
  BiHotel,
  BiMapAlt,
  BiRestaurant,
  BiStar,
} from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faWheelchair, faBraille } from '@fortawesome/free-solid-svg-icons'

const Header = ({ setType, setRatings, setCoordinates, setCategory }) => {
  
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex
      >
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <InputGroup width={"35vw"} shadow="lg" border='2px' borderColor={`#FF9100`} rounded="full" padding='3px'>
          <Menu>
          <MenuButton color={`#2C2C68`} as={Button} rounded="full" bg={"white"} rightIcon={<TriangleDownIcon color={`#FF9100`} />} fontWeight={"bold"} fontSize={17} width='33%'>
    What?
  </MenuButton>
  <MenuList rounded='lg' border='2px' borderColor={`#FF9100`} textColor={'#2C2C68'} >
    <MenuItem onClick={() => setCategory('restaurant')}>Restaurants</MenuItem> 
    <Center height='50px' >
    <Divider borderColor={`#FF9100`} orientation='horizontal' width="90%" />
    </Center>
    {/* <MenuItem onClick={() => setCategory('')}>Hotels</MenuItem>
    <Center height='10px'>
    <Divider borderColor={`#FF9100`}  orientation='horizontal' width="90%" />
    </Center>
    <MenuItem onClick={() => setType("attractions")}>Attractions</MenuItem>
    <Center height='10px'> */}
    {/* <Divider borderColor={`#FF9100`}  orientation='horizontal' width="90%" />
    </Center> */}
    <MenuItem onClick={() => setCategory('gym')}>Gym</MenuItem>
    <FontAwesomeIcon className="fa-2xl" icon={faWheelchair} />
    <FontAwesomeIcon className="fa-2xl" icon={faBraille} />
    
    <Center height='50px'>
    <Divider borderColor={`#FF9100`} orientation='horizontal' width="90%" />
    </Center>
    <MenuItem onClick={() => setCategory('cinema')}>Cinema</MenuItem>
    <Center height='10px'>
    <Divider borderColor={`#FF9100`} orientation='horizontal' width="90%" />
    </Center>
    <MenuItem onClick={() => setCategory('shop')}>Shop</MenuItem>
    <Center height='10px'>
    <Divider borderColor={`#FF9100`} orientation='horizontal' width="90%" />
    </Center>
    <MenuItem onClick={() => setCategory('shop')}>Cafe</MenuItem>
  </MenuList>
  </Menu>

            <Input
              type={"text"}
              variant={"filled"}
              fontSize={17}
              fontWeight={"bold"}
              placeholder="Where?"
              bg={"white"}
              color={"gray.700"}
              _placeholder={{ color: `#2C2C68` }}
              rounded="full"
              width={"33%"}
            />
             
              <Button bgGradient='linear(to-r, #17CEDA, #032396)' rounded="full" _hover={"linear(to-r, blue.200, purple.500)"} leftIcon={<Search2Icon/>} color='white' width='33%'>
              Search
             </Button>
            
          </InputGroup>
        </Autocomplete>

        <Flex alignItems={"center"} justifyContent={"center"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
          >
            <Menu>
              <BiStar fontSize={25} />
              <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                Choose ratings
              </MenuButton>

              <MenuList>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                    All Rating
                  </Text>
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings(2)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    2.0
                  </Text>

                  <Rating size="small" value={2} readOnly />
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings(3)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    3.0
                  </Text>

                  <Rating size="small" value={3} readOnly />
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings(4)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    4.0
                  </Text>

                  <Rating size="small" value={4} readOnly />
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings(5)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    4.5
                  </Text>

                  <Rating size="small" value={5} readOnly />
                </MenuItem>
              </MenuList>
            </Menu>
            <BiChevronDown fontSize={25} />
          </Flex>

          {/* Restaurants */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("restaurants")}
          >
            <BiRestaurant fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Restaurants
            </Text>
          </Flex>

          {/* Hotels */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("hotels")}
          >
            <BiHotel fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Hotels
            </Text>
          </Flex>

          {/* Attractions */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("attractions")}
          >
            <BiMapAlt fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Attractions
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;



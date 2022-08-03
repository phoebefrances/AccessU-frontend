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
    Center,
  } from "@chakra-ui/react";
  import { Rating } from "@material-ui/lab";
  import { Autocomplete } from "@react-google-maps/api";
  import React, { useState } from "react";
  import { TriangleDownIcon, Search2Icon } from "@chakra-ui/icons";
  
  import {
    BiChevronDown,
    BiHotel,
    BiMapAlt,
    BiRestaurant,
    BiStar,
  } from "react-icons/bi";


const Search = ({ setType, setRatings, setCoordinates }) => {

    const [autocomplete, setAutocomplete] = useState(null);
  
    const onLoad = (autoC) => setAutocomplete(autoC);
  
    const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      setCoordinates({ lat, lng });
    }

return (  
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <InputGroup
            width={"35vw"}
            shadow="lg"
            border="2px"
            borderColor={`#FF9100`}
            rounded="full"
            padding="3px"
          >
            <Menu>
              <MenuButton
                color={`#2C2C68`}
                as={Button}
                rounded="full"
                bg={"white"}
                rightIcon={<TriangleDownIcon color={`#FF9100`} />}
                fontWeight={"bold"}
                fontSize={17}
                width="33%"
              >
                What?
              </MenuButton>
              <MenuList
                rounded="lg"
                border="2px"
                borderColor={`#FF9100`}
                textColor={"#2C2C68"}
              >
                <MenuItem onClick={() => setType("restaurants")}>
                  Restaurants
                </MenuItem>
                <Center height="10px">
                  <Divider
                    borderColor={`#FF9100`}
                    orientation="horizontal"
                    width="90%"
                  />
                </Center>
                <MenuItem onClick={() => setType("hotels")}>Hotels</MenuItem>
                <Center height="10px">
                  <Divider
                    borderColor={`#FF9100`}
                    orientation="horizontal"
                    width="90%"
                  />
                </Center>
                <MenuItem onClick={() => setType("attractions")}>
                  Attractions
                </MenuItem>
                <Center height="10px">
                  <Divider
                    borderColor={`#FF9100`}
                    orientation="horizontal"
                    width="90%"
                  />
                </Center>
                <MenuItem>Gym</MenuItem>
                <Center height="10px">
                  <Divider
                    borderColor={`#FF9100`}
                    orientation="horizontal"
                    width="90%"
                  />
                </Center>
                <MenuItem>Cinema</MenuItem>
                <Center height="10px">
                  <Divider
                    borderColor={`#FF9100`}
                    orientation="horizontal"
                    width="90%"
                  />
                </Center>
                <MenuItem>Shop</MenuItem>
                <Center height="10px">
                  <Divider
                    borderColor={`#FF9100`}
                    orientation="horizontal"
                    width="90%"
                  />
                </Center>
                <MenuItem>Cafe</MenuItem>
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

            <Button
              bgGradient="linear(to-r, #17CEDA, #032396)"
              rounded="full"
              _hover={"linear(to-r, blue.200, purple.500)"}
              leftIcon={<Search2Icon />}
              color="white"
              width="33%"
            >
              Search
            </Button>
          </InputGroup>
          </Autocomplete>
          );
        }
         
        export default Search;
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
import { Autocomplete } from "@react-google-maps/api";
import React, { useState } from "react";
import { TriangleDownIcon, Search2Icon } from "@chakra-ui/icons";
import OurButton from "./OurButton";
import { Select } from '@chakra-ui/react'

const Search = ({ setType, setCoordinates }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <InputGroup
        width={"50vw"}
        minWidth="500px"
        height={"90%"}
        shadow="lg"
        border="2px"
        borderColor={`#FF9100`}
        rounded="full"
        padding="3px"
        display="flex"
        justify="center"
      >
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
          width="32%"
          // basis="0"
          // grow="1"
        />
        <Divider orientation="vertical" />
        <Select placeholder={"What?"} 
           color={`#2C2C68`}
            rounded="full"
            bgColor={"white"}
            rightIcon={<TriangleDownIcon color={`#FF9100`} />}
            fontWeight={"bold"}
            fontSize={17}
            width="32%">
        <option value='option1'>Restaurants</option>
        <option value='option2'>Gym</option>
        <option value='option3'>Cinema</option>
        <option value='option3'>Shop</option>
        <option value='option3'>Cafe</option>
        </Select>
        
        {/* <Menu>
          <MenuButton
            color={`#2C2C68`}
            as={Button}
            rounded="full"
            bg={"white"}
            rightIcon={<TriangleDownIcon color={`#FF9100`} />}
            fontWeight={"bold"}
            fontSize={17}
            width="32%"
            // basis="0"
            // grow="1"
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
        <Divider orientation="vertical" /> */}
        <Menu>
          <MenuButton
            color={`#2C2C68`}
            as={Button}
            rounded="full"
            bg={"white"}
            rightIcon={<TriangleDownIcon color={`#FF9100`} />}
            fontWeight={"bold"}
            fontSize={17}
            width="32%"
            // basis="0"
            // grow="1"
          >
            Accessibility Filter
          </MenuButton>
          <MenuList
            rounded="lg"
            border="2px"
            borderColor={`#FF9100`}
            textColor={"#2C2C68"}
          >
            <MenuItem onClick={() => setType("restaurants")}>Mobility</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => setType("attractions")}>
              Visual Impairment
            </MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem>Hearing Impairment</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem>Neuro Divergent</MenuItem>
          </MenuList>
        </Menu>

        <OurButton text={"Search"} icon={<Search2Icon />} />
      </InputGroup>
    </Autocomplete>
  );
};

export default Search;

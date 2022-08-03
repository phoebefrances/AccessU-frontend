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
        width={"75vw"}
        height={"90%"}
        shadow="lg"
        border="2px"
        borderColor={`#FF9100`}
        rounded="full"
        padding="3px"
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
          width={"15%"}
        />
        <Divider orientation="vertical" />
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
        <Divider orientation="vertical" />
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
            Accessibility Filter
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

        <OurButton text={"Search"} icon={<Search2Icon />} />
      </InputGroup>
    </Autocomplete>
  );
};

export default Search;

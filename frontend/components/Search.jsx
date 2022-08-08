import {
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import React, { useState } from "react";
import { TriangleDownIcon, Search2Icon } from "@chakra-ui/icons";
import OurButton from "./OurButton";

const Search = ({
  setCoordinates,
  setCategory,
  setRatings,
  setSearchStatus,
  searchStatus,
}) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [categoryText, setCategoryText] = useState("What?");
  const [ratingText, setRatingText] = useState("Rating");

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  //This function, categoryChanges(restaurant) replaces the onChange
  function categoryChanges(cat) {
    console.log(cat);
    setCategory(cat);
    setCategoryText(cat);
  }

  function ratingChanges(rate) {
    console.log(rate);
    setRatings(rate);
    setRatingText(rate);
  }

  function searchFilter() {
    setSearchStatus(!searchStatus);
  }
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
        />

        {/* Venue category menu: */}

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
          >
            {categoryText}
          </MenuButton>
          <MenuList
            rounded="lg"
            border="2px"
            borderColor={`#FF9100`}
            textColor={"#2C2C68"}
          >
            <MenuItem onClick={() => categoryChanges("restaurant")}>
              Restaurant
            </MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => categoryChanges("gym")}>Gym</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => categoryChanges("cinema")}>
              Cinema
            </MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => categoryChanges("shop")}>Shop</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => categoryChanges("cafe")}>Cafe</MenuItem>
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
            width="32%"
          >
            {ratingText}
          </MenuButton>
          <MenuList
            rounded="lg"
            border="2px"
            borderColor={`#FF9100`}
            textColor={"#2C2C68"}
          >
            <MenuItem onClick={() => ratingChanges("1")}>1 Star</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => ratingChanges("2")}>2 Stars</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => ratingChanges("3")}>3 Stars</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => ratingChanges("4")}>4 Stars</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => ratingChanges("5")}>5 Stars</MenuItem>
          </MenuList>
        </Menu>

        <OurButton
          onClick={searchFilter}
          text={"Search"}
          icon={<Search2Icon />}
        />
      </InputGroup>
    </Autocomplete>
  );
};

export default Search;

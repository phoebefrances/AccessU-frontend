import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import worldmap from "../public/world-map.jpg";
import React, { useState, useContext } from "react";
import { MapStyleContext } from "./MapStyleContext";

const MapStylesToggle = ({}) => {
  const [mapStyle, SetMapStyle] = useContext(MapStyleContext);
  return (
    <Menu>
      <MenuButton
        color={`#2C2C68`}
        as={Button}
        rounded="full"
        bg={"white"}
        fontWeight={"bold"}
        fontSize={17}
        width="200px"
        border="2px"
        borderColor={`#FF9100`}
        rightIcon={<TriangleDownIcon color={`#FF9100`} />}
      >
        Theme
      </MenuButton>
      <MenuList
        rounded="lg"
        border="2px"
        borderColor={`#FF9100`}
        textColor={"#2C2C68"}
      >
        <MenuItem
          onClick={() =>
            SetMapStyle({
              styles: require("../libs/map-grayscale.json"),
            })
          }
          minH="48px"
          minW={"100px"}
        >
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={worldmap}
            alt="Fluffybuns the destroyer"
            mr="12px"
            width="100px"
            height="100px"
          />
          <span>Gray Scale</span>
        </MenuItem>
        <Divider
          orientation="horizontal"
          borderColor={`#FF9100`}
          weight="10px"
          width="100%"
          alignSelf="center"
        />
        <MenuItem
          onClick={() =>
            SetMapStyle({
              styles: require("../libs/map-default.json"),
            })
          }
          minH="40px"
        >
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={worldmap}
            alt="Simon the pensive"
            mr="12px"
            width="100px"
            height="100px"
          />
          <span>Default Map</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MapStylesToggle;

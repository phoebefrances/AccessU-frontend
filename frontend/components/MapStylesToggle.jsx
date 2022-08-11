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
  } from '@chakra-ui/react'
  import { PhoneIcon, AddIcon, WarningIcon, ChevronDownIcon } from '@chakra-ui/icons'
  import Image from "next/image";
  import worldmap from "../public/world-map.jpg";
  import React, { useState, useContext } from "react";
import {MapStyleContext} from './MapStyleContext'

const MapStylesToggle = ({}) => {
    const [mapStyle, SetMapStyle] = useContext(MapStyleContext)
  return (
    <Menu>
    <MenuButton minW={"80px"} as={Button} rightIcon={<ChevronDownIcon />}>
      Theme
    </MenuButton>
    <MenuList>
      <MenuItem onClick={()=>SetMapStyle({
        styles: require('../libs/map-grayscale.json')
      })} minH='48px' minW={'100px'}>
        <Image
          boxSize='2rem'
          borderRadius='full'
          src= {worldmap}
          alt='Fluffybuns the destroyer'
          mr='12px'
          width= "100px"
          height= "100px"
        />
        <span>Gray Scale</span>
      </MenuItem>
      <MenuItem onClick={()=>SetMapStyle({
        styles: require('../libs/map-default.json')
      })} minH='40px'>
        <Image
          boxSize='2rem'
          borderRadius='full'
          src= {worldmap}
          alt='Simon the pensive'
          mr='12px'
          width= "100px"
          height= "100px"
        />
        <span>Default Map</span>
      </MenuItem>
    </MenuList>
  </Menu>
    
  );
};

export default MapStylesToggle;
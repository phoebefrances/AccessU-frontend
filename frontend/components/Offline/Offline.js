import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import { BiX } from "react-icons/bi";

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
    //This state updates when you click the Iolocation icon for a particular place, that place icon will update from not having a card to having a card i.e. from false to true 
   const [isCard, setIsCard] = useState(false);
 
   //This state updates the card for the icon of a particular place from not having any details to having details i.e. from null to '*Whatever details are fetched*'
   const [cardData, setCardData] = useState(null);
  
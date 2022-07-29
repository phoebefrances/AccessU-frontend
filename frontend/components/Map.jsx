import React from "react";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react"

const Map = ({coordinates, setCoordinates}) => {
  return ( <Box width={"full"} height={"full"}>
  <GoogleMapReact
    bootstrapURLKeys={{key: "AIzaSyD93tjfea30qHGkuhHJWQ0vQB9FF-HYIZo"}}
    defaultCenter={coordinates}
    center= {coordinates}
    defaultZoom= {10}
    margin= {[50, 50, 50, 50]}
    options= {""}
    onChange= {() => {}}
    onChildClick= {() => {}}
  ></GoogleMapReact>
  </Box>
  );
};

export default Map;

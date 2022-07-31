import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { useEffect, useState } from "react";
import { getPlacesData } from "./api/getPlacesData";

// dummy data 
// const places = [
//   { name: "sample Place1" },
//   { name: "sample Place1" },
//   { name: "sample Place1" },
//   { name: "sample Place1" },
// ];

const Home = () => {

  //The 3 states below are for our Header component
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");

  //This state is for talking to the API
  const [isLoading, setIsLoading] = useState(false);

  // This state is for getting the lat and lng for ne, nw, se, sw boundaries
  const [bounds, setBounds] = useState(null)

  // This state is for updating the places once the places data has loaded which is passed to the List
  const [places, setPlaces] = useState([])

  // This state is for updating the data if the user chooses to filter the places listed e.g. by rating, n.b. filteredPlaces is passed to places
  const [filteredPlaces, setFilteredPlaces] = useState([])

  // get the users current location on intial login 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
    console.log({latitude, longitude});
    setCoordinates({lat: latitude, lng: longitude})
    })

  }, [])

  // updates the data to the users choice of rating 
  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData);
    console.log({ ratings });
  }, [ratings]);
  
  // updates the data to the users choice of category or location 
  useEffect(() => {
    setIsLoading(true)
    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data)
      setIsLoading(false)
    })
  } ,[type, coordinates, bounds])

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />

      <List 
      places={filteredPlaces.length ? filteredPlaces : places}
      isLoading={isLoading} />

      <Map 
      setCoordinates={setCoordinates}
      coordinates={coordinates} 
      setBounds={setBounds}
      places ={filteredPlaces.length ? filteredPlaces : places} />
    </Flex>
  );
};

export default Home;

import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";

//👇 Comment out if using offline database. Uncomment if using API
// import { getPlacesData } from "./api/getPlacesData";

import Head from "next/head";

//👇 Comment out if using API. Uncomment if using offline database.
import { places } from "../libs/offlineData.js";

const Home = () => {
  //This state changes from false to true when a pin/marker (IoLocation in the code) is clicked, indicating that a venue has been selected
  const [isCard, setIsCard] = useState(false);

  //This state holds the details of the venue that has been selected. This is later passed to Large Card to be displayed.
  const [cardData, setCardData] = useState(null);

  //👇 Comment out if using offline database. Uncomment if using API
  // const [places, setPlaces] = useState({});

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  //👇 Comment out if using offline database. Uncomment if using API
  // const [bounds, setBounds] = useState(null);
  const [category, setCategory] = useState("");

  // this sets the initial state of the ratings.

  const [ratings, setRatings] = useState("");

  // This is not used, unless this is used in conjunction with API. It is not useful without that.

  const [isLoading, setIsLoading] = useState(false);

  //👇 Comment out if using API. Uncomment if using offline database. ❗What was here and where did it go?

  // get the users current location on intial login
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // This now selects places by rating OR category
  useEffect(() => {
    function conditionSelector(place) {
      return category == "all"
        ? place.rating > ratings
        : //☝️ if user selected category to be "all", this filters by rating alone (NB: rating is "" by default, which gets coerced into 0. So, if the user selected category "all", and didn't select rating, it'll display all items with rating > 0, i.e. all items)
        ratings && category
        ? place.rating > ratings && place.category == category
        : //☝️ if user selected both ratings and category, it filters for those places which meet both

        ratings
        ? place.rating > ratings
        : //☝️ else, if only reting is selected, it filters for all places with specified rating (or higher), regardless of category

        category
        ? place.category == category
        : //☝️ else, if only category is selected, it filters for places with specified category, regardless of rating

          ratings == 420;
      //☝️ else, if neither category nor rating is selected, it filters for places with rating of 420, which don't exist in our database
    }

    const filteredData = places.filter(conditionSelector);

    setFilteredPlaces(filteredData);
  }, [ratings, category]);

  // 👇 Updates the data to the users choice of category or location
  // 👇 Comment out if using offline database. Uncomment if using the API
  // useEffect(() => {
  //   setIsLoading(true);
  //   getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
  //     console.log(`This is data: ${data}`);
  //     console.dir(data);
  //     setPlaces(data);
  //     setIsLoading(false);
  //   });
  // }, [type, coordinates, bounds]);

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
      <Head>
        <script
          src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD93tjfea30qHGkuhHJWQ0vQB9FF-HYIZo"
          async
        ></script>
      </Head>

      <Header
        setRatings={setRatings}
        setCoordinates={setCoordinates}
        setCategory={setCategory}
      />

      <List
        places={filteredPlaces}
        isLoading={isLoading}
        setIsCard={setIsCard}
        setCardData={setCardData}
      />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        //👇 Comment out if using offline database. Uncomment if using API
        // setBounds={setBounds}
        places={filteredPlaces}
        isCard={isCard}
        setIsCard={setIsCard}
        cardData={cardData}
        setCardData={setCardData}
      />
    </Flex>
  );
};

export default Home;

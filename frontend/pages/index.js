import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HeaderBig from "../components/HeaderBig";
import HeaderSmall from "../components/HeaderSmall";
import List from "../components/List";
import Map from "../components/Map";
import Head from "next/head";
import LargeCard from "../components/LargeCard";

const Home = () => {
  const [backendData, setBackendData] = useState([]);

  const [reviewData, setReviewData] = useState([]);

  const [starRating, setStarRating] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://places-table-undefined.herokuapp.com/places`
        );
        const data = await response.json();
        setBackendData(data.payload.rows);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchReviewData = async () => {
      try {
        const response = await fetch(
          `https://places-table-undefined.herokuapp.com/reviews`
        );
        const data = await response.json();

        setReviewData(data.payload.rows);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchReviewData();
    fetchData();
  }, []);

  //STATES:
  //Rating status passed down from here
  const [rating, setRating] = useState(null);

  //Changes from false to true when the user clicks a pin/marker. Then back to false when the user closes the large card pop-up:
  const [isCard, setIsCard] = useState(false);

  //Holds the details of the venue that has been selected. This is later passed to Large Card to be displayed:
  const [cardData, setCardData] = useState(null);

  // User-selected category and rating are put here for filtering purposes:
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState("");

  //Results of filtering go here:
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  //Used to display the skeleton whilst data are being fetched from API. Doesn't do anything when using offline data:
  const [isLoading, setIsLoading] = useState(false);

  // Gets the users current location on intial login
  const [coordinates, setCoordinates] = useState({});

  //This controls rendering of map, list and small logo + controls styling of Searchbar
  const [searchStatus, setSearchStatus] = useState(false);

  //Logs search button triggers. E.g. anytime the search button is clicked, the status will change, and that in turn will run the useEffect to fetch the map data
  //We will pass setSearchClick to Header > Search component.
  const [searchClick, setSearchClick] = useState(false);


  useEffect(() => {
 
    setCoordinates({ lat: 51.60376294670231, lng: -0.010961442420194591 });
  
  }, []);

  // This now selects places by rating OR category
  useEffect(() => {
    function conditionSelector(place) {
      return category == "all"
        ? place.rating > ratings
        : //☝️ if user selected category to be "all", this filters by rating alone (NB: rating is "" by default, which gets coerced into 0. So, if the user selected category "all", and didn't select rating, it'll display all items with rating > 0, i.e. all items)
        ratings && category
        ? place.rating > ratings && place.category == category
        : //☝️ else, if user selected both ratings and category, it filters for those places which meet both

        ratings
        ? place.rating > ratings
        : //☝️ else, if only reting is selected, it filters for all places with specified rating (or higher), regardless of category

        category
        ? place.category == category
        : //☝️ else, if only category is selected, it filters for places with specified category, regardless of rating

          ratings == 420;
      //☝️ else, if neither category nor rating is selected, it filters for places with rating of 420, which don't exist in our database
    }

    // const filteredData = places.filter(conditionSelector);
    const filteredData = backendData.filter(conditionSelector);

    setFilteredPlaces(filteredData);
  }, [searchClick]);

  //❗ If using an API, move the commented-out useEffect (currently at the bottom of the file) here and uncomment it. ❗

  return (
    <Flex
      data-testid="home-test"
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
          src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&region=GB`}
          async
        ></script>
      </Head>
      {searchStatus ? (
        <>
          <HeaderSmall
            setRatings={setRatings}
            setCoordinates={setCoordinates}
            setCategory={setCategory}
            setSearchStatus={setSearchStatus}
            searchStatus={searchStatus}
            setSearchClick={setSearchClick}
            searchClick={searchClick}
          />
          <List
            data-testid="home-test"
            places={filteredPlaces}
            isLoading={isLoading}
            setIsCard={setIsCard}
            setCardData={setCardData}
            rating={rating}
            setRating={setRating}
            reviewData={reviewData}
            setStarRating={setStarRating}
            starRating={starRating}
            CardData={cardData}
          />
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
           
            places={filteredPlaces}
            isCard={isCard}
            setIsCard={setIsCard}
            cardData={cardData}
            setCardData={setCardData}
            rating={rating}
            setRating={setRating}
            setStarRating={setStarRating}
            starRating={starRating}
          />
          {/* Conditionally rendered the LargeCard component if isCard is true  */}
          {isCard && (
            <LargeCard
              cardData={cardData}
              setIsCard={setIsCard}
              rating={rating}
              setRating={setRating}
              reviewData={reviewData}
            />
          )}
        </>
      ) : (
        <>
          <HeaderBig
            setRatings={setRatings}
            setCoordinates={setCoordinates}
            setCategory={setCategory}
            setSearchStatus={setSearchStatus}
            searchStatus={searchStatus}
            setSearchClick={setSearchClick}
            searchClick={searchClick}
          />
        </>
      )}
    </Flex>
  );
};

export default Home;


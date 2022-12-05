import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { Text } from "@chakra-ui/react";

let emptyRatingDetails = {
  place_id: "",
  rating: "",
  comment: "",
  user_id: "",
};

export default function StarRating({ place_id, rating, setRating }) {
  useEffect(() => {
    if (rating != null) {
      console.log(`Rating for place with the ID of ${place_id} , is ${rating}`);
      emptyRatingDetails = {
        place_id: place_id,
        rating: rating,
        comment: "",
        user_id: "",
      };
      sendRating(emptyRatingDetails);
    }
  }, [rating]);

  async function sendRating(ratingData) {
    try {
      console.log("Rating Data", ratingData);
      const res = await fetch(`https://places-table-undefined.herokuapp.com/reviews`, {
        method: "POST",
        body: JSON.stringify(ratingData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      console.log("Returned data is", data);
    } catch (error) {
      console.log("ERROR fetching data...", error);
    }
  }

  //This returns a column-flexbox with Text component and (underneath) Rating component.
  //If rating is null (as it will be when it's first displayed):
  // Text component displays the string "How accesible did you find this place"
  // Rating component allows the user to submit rating
  //If rating isn't null (and it won't be once the user submited their rating):
  //Text component displays the string "Thank you for your rating!"
  //Rating component is display only, displaying whatever ratign user just subitted
  return (
    <>
      <Flex className="rating" direction="column" align="center">
        <Text fontSize="small" color="#2C2C68" fontWeight="500">
          {rating
            ? "Thank you for your rating!"
            : "How accesible did you find this place?"}
        </Text>
        {rating ? (
          <Rating name="read-only" size="large" value={rating} readOnly />
        ) : (
          <Rating
            size="large"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
              console.log(rating);
            }}
          />
        )}
      </Flex>
    </>
  );
}

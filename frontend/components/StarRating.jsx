import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import Delayed from "./Delayed";


export default function StarRating({place_id, setStarClicked, starClicked}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);



 
    useEffect(() => {

        if(rating != null){
            console.log(`Rating for place with the ID of ${place_id} , is ${rating}`)
        }
        
        
      }, [rating]);

 
  

  return (
    <>
    <button className="runButton"></button>
    {rating == null
      ?<Flex className="rating">
        <label>
          <input
            type="radio"
            name="rating"
            value="1"
            onClick={() => setRating(1)}
            onMouseOver={()=> setHover(1)}
            onMouseOut={()=> setHover(null)}
          />
          <FaStar
            className="star"
            color={(hover || rating) >= 1 ? "#ffc107" : "#e4e5e9"}
            size={25}
          />
        </label>


        <label>
          <input
            type="radio"
            name="rating"
            value="2"
            onClick={() => setRating(2)}
            onMouseOver={()=> setHover(2)}
            onMouseOut={()=> setHover(null)}
          />
          <FaStar
            className="star"
            color={(hover || rating) >= 2 ? "#ffc107" : "#e4e5e9"}
            size={25}
          />
        </label>

        <label>
          <input
            type="radio"
            name="rating"
            value="3"
            onClick={() => setRating(3)}
            onMouseOver={()=> setHover(3)}
            onMouseOut={()=> setHover(null)}
          />
          <FaStar
            className="star"
            color={(hover || rating) >= 3 ? "#ffc107" : "#e4e5e9"}
            size={25}
          />
        </label>

        <label>
          <input
            type="radio"
            name="rating"
            value="3"
            onClick={() => setRating(4)}
            onMouseOver={()=> setHover(4)}
            onMouseOut={()=> setHover(null)}
          />
          <FaStar
            className="star"
            color={(hover || rating) >= 4 ? "#ffc107" : "#e4e5e9"}
            size={25}
          />
        </label>

        <label>
          <input
            type="radio"
            name="rating"
            value="5"
            onClick={() => setRating(5)}
            onMouseOver={()=> setHover(5)}
            onMouseOut={()=> setHover(null)}
          />
          <FaStar
            className="star"
            color={(hover || rating) >= 5 ? "#ffc107" : "#e4e5e9"}
            size={25}
          />
        </label>
      </Flex>
      
      :
      <Flex> 
      <FaStar
            className="star"
            color={rating >= 1 ? "#ffc107" : "#e4e5e9"}
            size={25}
          />
           <FaStar
            className="star"
            color={rating >= 2? "#ffc107" : "#e4e5e9"}
            size={25}
          /> <FaStar
          className="star"
          color={rating >= 3 ? "#ffc107" : "#e4e5e9"}
          size={25}
        /> <FaStar
        className="star"
        color={rating >= 4 ? "#ffc107" : "#e4e5e9"}
        size={25}
      />
      <FaStar
        className="star"
        color={rating >= 5 ? "#ffc107" : "#e4e5e9"}
        size={25}
      />
      <Delayed>
      <label> Thank you for rating!</label>
        </Delayed>
      </Flex>
      
    } 
    </>
  );
}

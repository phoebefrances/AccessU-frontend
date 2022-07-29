import React from "react";
import { Flex, InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import { BiSearch } from "react-icons/bi";

const Header = ({ setType, setRatings, setCoordinates }) => {
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex>
        {/* <Autocomplete> */}
        <InputGroup width={"35vw"} shadow="lg">
          <InputRightElement
            pointerEvents={"none"}
            children={<BiSearch color="grey" fontsize={20} />}
          />

          <Input
            type={"text"}
            placeholder="Search Google Map..."
            variant={"filled"}
            fontSize={18}
            bg={"white"}
            color={"gray.700"}
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.800" }}
            _placeholder={"gray.700"}
          />
        </InputGroup>
        {/* </Autocomplete> */}
      </Flex>
    </Flex>
  );
};

export default Header;

import { Flex, Spacer } from "@chakra-ui/react";
import Search from "./Search";
import Logo from "../public/logo_new_resized.png";
import HeaderMenu from "./HeaderMenu";

import Image from "next/image";

const HeaderSmall = ({
  setCategory,
  setCoordinates,
  setRatings,
  setSearchStatus,
  setSearchClick,
  searchClick,
}) => {
  return (
    <>
      <Flex
        className="global-container"
        position={"absolute"}
        top={0}
        left={0}
        height={"70px"}
        w="full"
        zIndex={101}
        bgColor={"white"}
        align="center"
      >
        <Image
          src={Logo}
          alt={"AccesU Logo"}
          objectFit="contain"
          width="300px"
          height="100%"
          onClick={() => setSearchStatus(false)}
        />

        <Spacer />
        <Search
          setCoordinates={setCoordinates}
          setCategory={setCategory}
          setRatings={setRatings}
          setSearchStatus={setSearchStatus}
          setSearchClick={setSearchClick}
          searchClick={searchClick}
        />
        <Spacer />
        <HeaderMenu />
      </Flex>
    </>
  );
};

export default HeaderSmall;

import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";

const Home = () => {
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
      {/* <Header /> */}

      {/* <List /> */}

      <Map />
    </Flex>
  );
};

export default Home;

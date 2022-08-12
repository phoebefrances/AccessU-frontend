import Head from "next/head";
import { Flex, Text, Divider } from "@chakra-ui/react";
import Logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../components/Header";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { fontWeight } from "@mui/system";

// https://final-project-front-end-undefinedd.vercel.app/

export default function About() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("http://localhost:3000/");
  };

  return (
    <div>
      <div>
        <Head>
          <title>About | Enabled </title>
          <meta name="description" content="About" />
        </Head>

        <Flex
          cursor="pointer"
          object-fit="cover"
          object-position="center"
          align="center"
        >
          <Image
            src={Logo}
            alt={"logo"}
            style={{ zIndex: 99 }}
            onClick={handleClick}
          />{" "}
          <Text fontSize={"38px"}> Prepare to be ENABLED </Text>
        </Flex>

        <Flex
          height="100px"
          align="center"
          justify="space-around"
          bgGradient="linear(to-r, #1773da, #030d96 )"
        >
          <Flex align="center" width="25%">
            <QuestionOutlineIcon color={`white`} w={20} h={16} />

            <Text color="white" fontWeight={"bold"}>
              Do you have to spend ages planning your trip?
            </Text>
          </Flex>

          <Flex align="center" width="25%">
            <QuestionOutlineIcon color={`white`} w={20} h={16} />
            <Text color="white" fontWeight={"bold"}>
              Have you visited somewhere to only find the access wasn't as you
              thought?
            </Text>
          </Flex>
          <Flex align="center" width="25%">
            <QuestionOutlineIcon color={`white`} w={20} h={16} />
            <Text color="white" fontWeight={"bold"}>
              Are you anxious visiting a new place so much so it stopped you
              from making that trip?
            </Text>
          </Flex>
        </Flex>

        <main>
          <br />
          <h2>Welcome!</h2>

          <p>
            Enabled is here to take the stress out of planning. Our aim is to
            provide you with all the accessibility information you need in order
            to plan your trip.
          </p>
          <br />

          <h2>Why?</h2>

          <ol>
            <li>1 in 4 households are impacted by disability</li>
            <li>
              98% of disabled people look for accessibility information before
              visiting somewhere for the first time
            </li>
            <li>
              Over 75% of disabled people don’t visit somewhere they wanted to
              go because they couldn’t find the accessibility information they
              needed
            </li>
            <li>
              This results in disabled people making 26% fewer trips than those
              without a disability
            </li>
          </ol>
          <br />

          <p>
            With Enabled we hope you can be more spontaneous, visit, recommend
            and return!
          </p>
        </main>
      </div>
    </div>
  );
}

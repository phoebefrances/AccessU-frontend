import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../components/Header";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

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
        </Head>
        <Flex cursor="pointer" align="center">
          <Image
            src={Logo}
            alt={"logo"}
            style={{ zIndex: 99 }}
            onClick={handleClick}
          />
        </Flex>
        <Flex>
          <QuestionOutlineIcon color={`#FF9100`} w={20} h={12} />
          <p> Do you have to spend ages planning your trip? </p>
          <style jsx>{`
            .container {
              margin: 50px;
            }
            p {
              color: navy;
              font-weight: 600;
              font-size: 16px;
            }
          `}</style>

          <QuestionOutlineIcon color={`#FF9100`} w={20} h={12} />
          <p>
            Have you visited somewhere to only find the access wasn't as you
            thought?
          </p>

          <QuestionOutlineIcon color={`#FF9100`} w={20} h={12} />
          <p>
            Are you anxious visiting a new place so much so it stopped you from
            making that trip?
          </p>
        </Flex>
      </div>
    </div>
  );
}

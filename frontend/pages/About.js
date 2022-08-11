import Head from "next/head";
import { Flex} from "@chakra-ui/react";
import Logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from 'next/router'

// https://final-project-front-end-undefinedd.vercel.app/

export default function About() {
    const router = useRouter()

    const handleClick = (e) => {
      e.preventDefault()
      router.push('http://localhost:3000/')
    }

    return (
        <div>
            <div>
                <Head>
                <title>About</title>
                </Head>
          <Flex cursor="pointer" justify="centre" >
            <Image
              src={Logo}
              alt={"logo"}
              style={{ zIndex: 99 }}
              onClick={handleClick}
            />
          </Flex>
             </div>
                 <div>
                     <h1>This is our About Page</h1>
                </div>
             </div>
    )
}




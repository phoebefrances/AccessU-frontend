import Image from "next/image";
import logo from "../public/logo.png";

const Logo = () => {
    return ( 
    <Image src={logo} width={"60px"} height={"50px"} />

     );
}
 
export default Logo;
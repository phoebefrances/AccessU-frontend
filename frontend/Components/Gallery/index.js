import SmallCard from "../SmallCard/index";
import pub from "../../public/pub.jpeg";
import cinema from "../../public/cinema.jpeg";
import queen from "../../public/queen.jpeg"


export default function Gallery() {
  return (
  <>
  <SmallCard img={pub} name="The Laurel Pub" category="Pub" address="337-339 High Rd HA35EQ" />
  <SmallCard img={cinema} name ="Duke Of York Cinema" category="Cinema" address="Preston Rd BN14NA"/>
  <SmallCard img={queen} name ="The Queen's Head" category="Pub" address="Abbotsford Road BN14NA"/>
  <SmallCard img={pub} name="The Laurel Pub" category="Pub" address="337-339 High Rd HA35EQ" />
  <SmallCard img={cinema} name ="Duke Of York Cinema" category="Cinema" address="Preston Rd BN14NA"/>
  <SmallCard img={queen} name ="The Queen's Head" category="Pub" address="Abbotsford Road BN14NA"/>
  </>
  )
}

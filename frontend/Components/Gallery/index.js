import SmallCard from "../SmallCard/index";
import pub from "../../public/pub.jpeg";
import cinema from "../../public/cinema.jpeg";
import queen from "../../public/queen.jpeg"


export default function Gallery() {
  return (
  <>
  <SmallCard img={pub} name="The Laurel Pub and Entertainment Venue" category="Category: Pub" address="Street Address: 337-339 High Rd, Harrow HA3 5EQ" />
  <SmallCard img={cinema} name ="Duke Of York Cinema" category="Category: Cinema" address="Street Address: Preston Rd, Brighton BN1 4NA"/>
  <SmallCard img={queen} name ="The Queen's Head" category="Category: Pub" address="69 Queens Rd, Brighton BN1 3XD"/>
  </>
  )
}

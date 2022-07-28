import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import smallCard from "../../styles/smallCard.module.css";
import AccessibleIcon from '@mui/icons-material/Accessible';
import HearingIcon from '@mui/icons-material/Hearing';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Rating from '@mui/material/Rating';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';




export default function SmallCard({ name, category, img, address }) {
  return (
      <Card>
    <div className={smallCard.container}>
        <div className="content">
          <CardContent>
            <Typography className={smallCard.name}>
              {name} 
            </Typography>
            <Typography className={smallCard.rating}>
            <Rating precision={0.5} defaultValue={5} name="read-only" readOnly />
            </Typography>
            <Typography className={smallCard.content}>
              {category}  |   {address}
            </Typography>
            <AccessibleIcon sx={{ fontSize: 40, color: "#02386E" }}/>
            <HearingIcon sx={{ fontSize: 40, color: "#02386E" }}/>
            <RemoveRedEyeIcon sx={{ fontSize: 40, color: "#02386E" }}/> 
            <SignLanguageIcon sx={{ fontSize: 40, color: "#02386E" }}/>
          </CardContent>
        </div>
        <div className={smallCard.image}>
          <Image src={img} alt="Image of Venue" width="90" height="90" border-radius= "25px"/>
        </div>
        </div>
      </Card>
  );
}

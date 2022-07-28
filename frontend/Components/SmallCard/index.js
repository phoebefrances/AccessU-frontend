import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import smallCard from "../../styles/smallCard.module.css";

export default function SmallCard({ name, category, img, address }) {
  return (
    <div className="container">
      <Card sx={{ maxWidth: 345 }}>
        <div className="image">
          <Image src={img} alt="Pub" width="150" height="100" />
        </div>
        <div className="content">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {address}
            </Typography>
            <Image
              src="/wheelchair.png"
              alt="Wheelchair"
              width="50"
              height="50"
            />
            <Image src="/Braille.jpeg" alt="Braille" width="50" height="50" />
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

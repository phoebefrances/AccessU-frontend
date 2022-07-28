import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';



export default function SmallCard({ name, category, img, address }) {
  return (
    <Card>
      <CardContent>
        <Typography>
          {name}
        </Typography>
        <Typography>
          {category}
        </Typography>
        <Typography>
          {address}
        </Typography>
        <Image src="/wheelchair.png" alt="Wheelchair" width="50" height="50" />
        <Image src="/Braille.jpeg" alt="Braille" width="50" height="50" />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <Image src={img} alt="Pub" width="100" height="100" />
    </Card>
  );
}

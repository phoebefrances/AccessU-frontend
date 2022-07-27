import * as React from 'react';
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import AccessibleIcon from '@mui/icons-material'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
     <Image src="/pub.jpeg" alt="Pub" width="300" height="200" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         The Laurel Pub and Entertainment Venue
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: Pub
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Street Address: 337-339 High Rd, Harrow HA3 5EQ
        </Typography>
        <Image src="/wheelchair.png" alt="Wheelchair" width="50" height="50" />
        <Image src="/Braille.jpeg" alt="Wheelchair" width="50" height="50" />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


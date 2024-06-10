import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { ChairType } from '../../types/chair';

type ChairCardProps = {
  chair: ChairType;
};

export default function ChairCard({ chair }: ChairCardProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={chair.image} title={chair.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {chair.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {chair.description.slice(0, 40)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

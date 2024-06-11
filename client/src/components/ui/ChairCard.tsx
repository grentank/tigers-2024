import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import type { ChairType } from '../../types/chair';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToFavorites } from '../../redux/slices/chairs/chairSlice';
import { deleteChairThunk } from '../../redux/slices/chairs/chairThunks';

type ChairCardProps = {
  chair: ChairType;
};

export default function ChairCard({ chair }: ChairCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((store) => store.chair.favoriteChairs);
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
        <Button size="small" onClick={() => dispatch(addToFavorites(chair.id))}>
          {favorites.find((el) => el.id === chair.id) ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </Button>
        <Button
          size="small"
          onClick={() => void dispatch(deleteChairThunk(chair.id))}
        >
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}

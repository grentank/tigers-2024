import React, { memo, useCallback } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import type { ChairType } from '../../types/chair';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  addToFavorites,
  setCurrentChair,
} from '../../redux/slices/chairs/chairSlice';
import { deleteChairThunk } from '../../redux/slices/chairs/chairThunks';
import FavoriteChairIcon from './FavoriteChairIcon';
import { openModal } from '../../redux/slices/modals/modalSlice';

type ChairCardProps = {
  chair: ChairType;
};

function ChairCard({ chair }: ChairCardProps): JSX.Element {
  console.log('Render', chair.id);
  const dispatch = useAppDispatch();
  const clickFavorite = (): void => {
    dispatch(addToFavorites(chair.id));
  };
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
        <Button size="small" onClick={clickFavorite}>
          <FavoriteChairIcon chairId={chair.id} />
        </Button>
        <Button
          size="small"
          onClick={() => void dispatch(deleteChairThunk(chair.id))}
        >
          Удалить
        </Button>
        <Button component={Link} to={`/chairs/${chair.id}`}>
          Подробнее
        </Button>
        <Button
          size="small"
          onClick={() => {
            dispatch(openModal('edit'));
            dispatch(setCurrentChair(chair));
          }}
        >
          Редактировать
        </Button>
      </CardActions>
    </Card>
  );
}

export default memo(ChairCard);

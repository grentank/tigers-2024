import React, { memo } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import type { ChairType } from '../../types/chair';
import { useAppSelector } from '../../redux/hooks';

type FavoriteChairIconProps = {
  chairId: ChairType['id'];
};

function FavoriteChairIcon({ chairId }: FavoriteChairIconProps): JSX.Element {
  const favorites = useAppSelector((store) => store.chair.favoriteChairs);

  if (favorites.find((el) => el.id === chairId)) return <FavoriteIcon />;
  return <FavoriteBorderOutlinedIcon />;
}

export default memo(FavoriteChairIcon);

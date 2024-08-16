import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
  author: string;
  note: string;
  image: string | null;
}

const OneNote: React.FC<Props> = ({ author, note, image }) => {
  let cardImg = '';
  if (image) {
    cardImg = `http://localhost:8000/${image}`;
  }
  return (
    <Card sx={{ width: 345, marginBottom: '20px' }}>
      <CardActionArea>
        {image ? (
          <CardMedia component="img" height="250" image={cardImg} alt={image} />
        ) : (
          <CardContent sx={{ height: '70px', placeItems: 'center' }}>
            <Typography>No image</Typography>
          </CardContent>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OneNote;

import { Button, Card, CardActions, CardContent, CardMedia, Typography  } from '@mui/material'

export default function ProjectCard({ title, context, description, media, onClick }) {
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={media}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" align="left">
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="p" align="left">
          {context}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} align="left">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
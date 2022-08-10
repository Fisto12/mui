import React from 'react'
import {  FavoriteBorder, FavoriteOutlined, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
const Post = () => {
  return (
     <Card sx={{margin:5}}>
        <CardHeader
        avatar={
            <Avatar
            sx={{bgcolor:'red'}} aria-label='recipe'
            src='https://engineering.unl.edu/images/staff/Kayla-Person.jpg'
            >
            </Avatar>
        }
        action={
            <IconButton aria-label='settings'>
              <MoreVert/>
            </IconButton>
        }
        title='Photography is good'
        subheader='september 14,2016'
        >

        </CardHeader>
        <CardMedia
        component='img'
        height='20%'
        image='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg'
        alt='image'
        />
        <CardContent>
            <Typography 
            variant='body2'
            color='text.secondary'
            >THESE IS VERY IMPRESSIVE AND PERFECT WAY TO START OFF THE DAY ITH JOY
            </Typography>
        </CardContent>
          <CardActions doubleSpacing>
            <IconButton
            aria-label='add to favourites'
            >
             <Checkbox 
              icon={<FavoriteBorder/> } checkedIcon={<FavoriteOutlined sx={{color:'red'}}/> }
             />
            </IconButton>
                   <IconButton
            aria-label='share'
            >
              <Share/>
            </IconButton>
          </CardActions>
       </Card>
  )
}

export default Post
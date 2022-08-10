import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
    height='100%'
    flex={2} 
    p={2}
    sx={{display:{xs:'none',sm:'block'}}}
    > 
    <Box  width={300}>
       <Typography variant='h6' fontWeight={200} >Online Friends</Typography>
       <AvatarGroup total={24}>
       <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" />
       <Avatar alt="Travis Howard" src="https://www.vanguardngr.com/wp-content/uploads/2015/10/felaKuti-e1443802655989.jpg" />
       <Avatar alt="Agnes Walker" src="https://engineering.unl.edu/kayla-person/" />
       <Avatar alt="Trevor Henderson" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg" />
       </AvatarGroup>
        <Typography variant='h6' fontWeight={200} >Latest Posts</Typography>
        <ImageList col={3} rowHeight={100} gap={5}>
            <ImageListItem>
                <img
             src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg'
             alt='text'
               />
            </ImageListItem>
              <ImageListItem>
                <img
             src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg'
             alt='text'
               />
            </ImageListItem>
              <ImageListItem>
                <img
             src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg'
             alt='text'
               />
            </ImageListItem>
            <ImageListItem>
                <img
             src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg'
             alt='text'
               />
            </ImageListItem>
            <ImageListItem>
                <img
             src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg'
             alt='text'
               />
            </ImageListItem>
            <ImageListItem>
                <img
             src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg'
             alt='text'
               />
            </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={200} >Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
        
    </Box>
  )
}

export default Rightbar
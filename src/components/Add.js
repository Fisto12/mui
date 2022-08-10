import { AddBox, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBackRounded } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
const StyledModal= styled(Modal) ({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
})
const UserBox= styled(Box) ({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    marginBlockStart:'20px'
})
const Add = () => {
    const [open,setOpen]= useState(false)
  return (
    <div>
    <Tooltip 
    title="Add" 
    onClick={(e)=>setOpen(true)}
    sx={{position:'fixed',bottom:20, left:{xs:'calc(40%)',md:'30'}}}>
    <Fab color="primary" aria-label="add">
  <AddBox />
     </Fab>
    </Tooltip>
    <StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={500} height={300} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5} >
     <Typography variant='h6' color='gray' textAlign='center'>CREATE POST</Typography>
     <UserBox>
        <Avatar src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg'
        sx={{width:30,height:30}}
        />
        <Typography fontWeight={500}>Fisto</Typography>
     </UserBox>
     <TextField id="standard-multiline-static" variant='standard' rows={4} sx={{width:'100%'}} multiline placeholder='whats on your mind' />
     <Stack direction='row' gap={1} mt={2} mb={3}>
        <EmojiEmotions color='primary'/>
        <Image color='secondary'/>
        <VideoCameraBackRounded color='success'/>
        <PersonAdd color='error'/>
     </Stack>
     <ButtonGroup
      fullWidth
      variant="contained" 
      aria-label="outlined primary button group">
      <Button>Post</Button>
      <Button sx={{width:'100px'}}>
        <DateRange/>
    </Button>
    </ButtonGroup>

  </Box>
</StyledModal>
    </div>
  )
}

export default Add
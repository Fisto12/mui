import { Mail, NotificationsOutlined, PetsOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'


const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent:'space-between'
})
const Search = styled('div') (({theme})=>({
     backgroundColor:'white',
     padding: '0 10px',
     borderRadius:theme.shape.borderRadius,
     width: '40%'
}))
const Icons = styled(Box) (({theme})=>({
     display:'none',
     gap:'20px',
     alignItems: 'center',
     [theme.breakpoints.up('sm')]:{
        display:'flex'
     }

}))
const UserBox = styled(Box) (({theme})=>({
     display:'flex',
     gap:'10px',
     alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
        display:'none'
     }

}))
const Navbar = ({theme}) => {
    const [open,setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
        {/* Toolbar gives padding */}
        <StyledToolBar> 
            <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}} >
               FISTO WEBSITE
            </Typography>
            <PetsOutlined sx={{display:{xs:'block',sm:'none'}}}/>
            <Search><InputBase placeholder='search'/></Search>
            <Icons>
             <Badge badgeContent={4} color="error">
            <Mail/>
            </Badge>
            <Badge badgeContent={2} color="error">
            <NotificationsOutlined/>
            </Badge>
            <Avatar sx={{width:30,height:30}}
            onClick={(e)=>setOpen(true)}
            />
            </Icons>
            <UserBox>
                <Avatar sx={{width:30,height:30}} onClick={(e)=>setOpen(true)}/>
                <Typography>JOHN</Typography>
            </UserBox>
            
        </StyledToolBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
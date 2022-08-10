import { AccountBox, Group, Home, Inbox, LocationCity, ModeNight, Pages, People, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box 
     flex={1}
      p={2}
      sx={{display:{xs:'none',sm:'block'}}}
      >
        <Box position='fixed' >
        <List >
            <ListItem disablePadding  >
                <ListItemButton component='a' href='#home'>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary='Homepage'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding >
                <ListItemButton component='a' href='#pages'>
                    <ListItemIcon>
                        <Pages/>
                    </ListItemIcon>
                    <ListItemText primary='Pages'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#group'>
                    <ListItemIcon>
                        <Group/>
                    </ListItemIcon>
                    <ListItemText primary='Group'/>
                </ListItemButton>
            </ListItem>
             <ListItem disablePadding>
                <ListItemButton component='a' href='#location'>
                    <ListItemIcon>
                        <LocationCity/>
                    </ListItemIcon>
                    <ListItemText primary='Marketplace'/>
                </ListItemButton>
            </ListItem>
             <ListItem disablePadding>
                <ListItemButton component='a' href='#home'>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    <ListItemText primary='Friends'/>
                </ListItemButton>
            </ListItem>
             <ListItem disablePadding>
                <ListItemButton component='a' href='#settings'>
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary='Settings'/>
                </ListItemButton>
            </ListItem>
             <ListItem disablePadding>
                <ListItemButton component='a' href='#profile'>
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary='Profile'/>
                </ListItemButton>
            </ListItem>
                <ListItem disablePadding>
                <ListItemButton component='a' href='#profile'>
                    <ListItemIcon>
                        <ModeNight/>
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode==='light'?'dark':'light')}/>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default Sidebar
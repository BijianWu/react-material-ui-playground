import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { purple } from '@mui/material/colors';
import { useState } from 'react';

export default function CustomList() {

    const [selectedNum, setSelectedNum] = useState(0);

    return (
        <Paper>
        <List  sx={{
            // selected and (selected + hover) states
            '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: purple[300],
            borderRadius: '10px',

            '&, & .MuiListItemIcon-root': {
                bgcolor: purple[300],
                borderRadius: '10px',
            },
            },
            // hover states
            '& .MuiListItemButton-root:hover': {
            bgcolor: 'orange',
            '&, & .MuiListItemIcon-root': {
                bgcolor: purple[300],
                borderRadius: '10px',

            },
            },
        }}>
            <ListItemButton sx={{mx:3, my:1, px: 6}} alignItems={'flex-start'} selected={selectedNum === 1} onClick={() => setSelectedNum(1)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Inbox"} />
              </ListItemButton>
            <ListItemButton sx={{mx:3, my:1, px: 6}} alignItems={'flex-start'} selected={selectedNum === 2} onClick={() => setSelectedNum(2)}>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Starred"} />
            </ListItemButton>

        </List>
        </Paper>
    )
}
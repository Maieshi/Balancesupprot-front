import { Drawer, MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { account, messages, settings } from '@/shared/utils'
import './style.css'
import { Link } from "react-router-dom";

const sxStyle = {
    '&:hover': {
        backgroundColor: "rgba(255,255,255,0.1)",
    },
    gap: '10px',
    color: '#fff'
}

export const MenuDrawer = () => {
    return (
        <Drawer
            anchor='left'
            open={ true }
            onClose={ () => {
                console.log( 'hi' )
            } }
            sx={ {
                "& .MuiPaper-root ": {
                    backgroundColor: "var(--primary-color)",
                },
            } }
        >
            <div className='menu'>
                <div className="menu-content">
                    <MenuList>
                        <Link to='/'>
                            <MenuItem sx={ sxStyle }>
                                <ListItemIcon>
                                    <img src={ account } alt="account"/>
                                </ListItemIcon>
                                <ListItemText>Account</ListItemText>
                            </MenuItem>
                        </Link>
                        <Link to='/messages'>
                            <MenuItem sx={ sxStyle }>
                                <ListItemIcon>
                                    <img src={ messages } alt="messages"/>
                                </ListItemIcon>
                                <ListItemText>Message</ListItemText>
                            </MenuItem>
                        </Link>
                        <Link to='/settings'>
                            <MenuItem sx={ sxStyle }>
                                <ListItemIcon>
                                    <img src={ settings } alt="settings"/>
                                </ListItemIcon>
                                <ListItemText>Settings</ListItemText>
                            </MenuItem>
                        </Link>
                    </MenuList>
                </div>
            </div>
        </Drawer>
    );
};


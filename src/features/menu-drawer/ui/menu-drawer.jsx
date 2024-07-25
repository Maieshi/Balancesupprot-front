import { Drawer, MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { account, messages, home } from '@/shared/utils'
import './style.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../modal/modal.js";

const sxStyle = {
    '&:hover': {
        backgroundColor: "rgba(202, 26, 61, 0.1)",
        borderRadius: 'var(--border-radius)'
    },
    gap: '10px',
    color: '#fff'
}

export const MenuDrawer = () => {
    const dispatch = useDispatch();
    const menu = useSelector( state => state.menu.open )

    return (
        <Drawer
            anchor='left'
            open={ menu }
            onClose={ () => {
                dispatch( openMenu( false ) )
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
                        <Link to='/' onClick={ () => dispatch( openMenu( false ) ) }>
                            <MenuItem sx={ sxStyle }>
                                <ListItemIcon>
                                    <img src={ home } alt="account"/>
                                </ListItemIcon>
                                <ListItemText>Accounts</ListItemText>
                            </MenuItem>
                        </Link>
                        <Link to='/messages' onClick={ () => dispatch( openMenu( false ) ) }>
                            <MenuItem sx={ sxStyle }>
                                <ListItemIcon>
                                    <img src={ messages } alt="messages"/>
                                </ListItemIcon>
                                <ListItemText>Messages</ListItemText>
                            </MenuItem>
                        </Link>
                        <Link to='/settings' onClick={ () => dispatch( openMenu( false ) ) }>
                            <MenuItem sx={ sxStyle }>
                                <ListItemIcon>
                                    <img src={ account } alt="settings"/>
                                </ListItemIcon>
                                <ListItemText>My Account</ListItemText>
                            </MenuItem>
                        </Link>
                    </MenuList>
                </div>
            </div>
        </Drawer>
    );
};


import './style.css'
import { menu } from '@/shared/utils'
import { MenuDrawer } from "@/features/menu-drawer";
import { useDispatch } from 'react-redux'
import { openModal } from "@/features/menu-drawer/modal/modal.js";
import { useState } from "react";
import { Menu, MenuItem, Divider } from "@mui/material";

export const HeaderComponent = () => {
    const dispatch = useDispatch()
    const [ anchorEl, setAnchorEl ] = useState( null );
    const open = Boolean( anchorEl );
    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };
    const handleClose = () => {
        setAnchorEl( null );
    };
    return (
        <>
            <header>
                <button onClick={ () => dispatch( openModal( true ) ) }>
                    <img src={ menu } alt="menu"/>
                </button>
                <button
                    id="basic-button"
                    aria-controls={ open ? 'basic-menu' : undefined }
                    aria-haspopup="true"
                    aria-expanded={ open ? 'true' : undefined }
                    onClick={ handleClick }
                    className='profile'>
                    S
                </button>
                <Menu
                    sx={ {
                        '& .MuiPaper-root ': {
                            borderRadius: "var(--border-radius)",
                            background: "var(--primary-color)",
                            color: "#fff",
                            fontWeight: 700
                        }
                    } }
                    id="basic-menu"
                    elevation={ 1 }
                    anchorOrigin={ {
                        vertical: 'bottom',
                        horizontal: 'right',
                    } }
                    transformOrigin={ {
                        vertical: 'top',
                        horizontal: 'right',
                    } }
                    anchorEl={ anchorEl }
                    open={ open }
                    onClose={ handleClose }
                    MenuListProps={ {
                        'aria-labelledby': 'basic-button',
                    } }
                >
                    <MenuItem>NickName</MenuItem>
                    <Divider sx={{  borderColor: 'rgb(99, 115, 129)', }} />
                    <MenuItem onClick={ handleClose }>Home</MenuItem>
                    <MenuItem onClick={ handleClose }>Profile</MenuItem>
                    <MenuItem onClick={ handleClose }>Settings</MenuItem>
                    <MenuItem onClick={ handleClose } sx={ {color: "red", marginTop: "10px"} }>Logout</MenuItem>
                </Menu>
            </header>
            <MenuDrawer/>
        </>
    );
};


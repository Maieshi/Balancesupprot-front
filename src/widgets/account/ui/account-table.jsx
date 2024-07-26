import './style.css'
import { action, prev, next } from '@/shared/utils'
import { Menu, MenuItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { useState } from "react";
import { ArrowTop, ArrowDown, Delete, edit, reset } from '@/shared/utils'


const AccountTable = () => {
    const [ th, setTh ] = useState( [
        {item: 'Account', img: false, default: false},
        {item: 'Name', img: false, default: false},
        {item: 'Balance', img: false, default: true},
        {item: 'Group', img: false, default: false},
        {item: 'Device', img: false, default: false},
        {item: 'Slim sim', img: false, default: false},
        {item: 'Phone', img: false, default: false},
        {item: 'Card Numbers', img: false, default: false},
        {item: 'Bank', img: false, default: false},
        {item: 'Expenses', img: false, default: false},
        {item: 'Update at', img: false, default: false},
        {item: 'Info', img: false, default: false},
        {item: 'Action', img: false, default: false}
    ] );
    const account = [ 1, 2, 3, 4, 5, 6, 7, 9, 9 ]

    const [ anchorEl, setAnchorEl ] = useState( null );

    const open = Boolean( anchorEl );

    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    const showArrow = ( index ) => {
        setTh( prevTh => {
            const newTh = [ ...prevTh ];
            if (newTh[index].default === true) {
                newTh[index].img = true;
                newTh[index].default = false
            } else {
                newTh[index].img = true;
            }
            return newTh;
        } );
    };

    const hideArrow = ( index ) => {
        setTh( prevTh => {
            const newTh = [ ...prevTh ];
            newTh[index].img = false;
            newTh[2].default = true
            return newTh;
        } );
    };
    return (
        <>
            <div className='account-table'>
                <table>
                    <thead>
                    <tr>
                        {
                            th.map( ( item, index ) => (
                                <th
                                    key={ index }
                                    onMouseOver={ () => showArrow( index ) }
                                    onMouseOut={ () => hideArrow( index ) }
                                >
                                    { item.img ? <img src={ ArrowTop } alt="ArrowTop"/> : "" }
                                    { item.default ? <img src={ ArrowDown } alt="ArrowDown"/> : "" }
                                    { item.item }
                                </th>
                            ) )
                        }
                    </tr>
                    </thead>
                    <tbody>
                    { account.map( ( account, index ) => (
                        <tr key={ index }>
                            <td>1233</td>
                            <td>Matveychik</td>
                            <td>3000.10</td>
                            <td>3</td>
                            <td>3.2</td>
                            <td>2</td>
                            <td>12345678901</td>
                            <td>5000,6543</td>
                            <td>Sberbank</td>
                            <td>
                                <div className='T'>
                                    <span>T</span> 12345 123,12
                                </div>
                                <div className='D'>
                                    <span>D</span> 12345 123,12
                                </div>
                            </td>
                            <td>02.01.2024 11:50</td>
                            <td></td>
                            <td>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={ open ? 'long-menu' : undefined }
                                    aria-expanded={ open ? 'true' : undefined }
                                    aria-haspopup="true"
                                    onClick={ handleClick }
                                >
                                    <img src={ action } alt="action"/>
                                </IconButton>
                                <Menu
                                    sx={ {
                                        '& .MuiPaper-root ': {
                                            borderRadius: "var(--border-radius)",
                                            background: "#262729",
                                            color: "#fff",
                                            boxShadow: "-7px 7px 7px 5px rgba(0, 0, 0, 0.02);",
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
                                    <MenuItem onClick={ handleClose }>
                                        <ListItemIcon>
                                            <img src={ reset } alt="reset"/>
                                        </ListItemIcon>
                                        <ListItemText> Reset balance</ListItemText>
                                    </MenuItem>
                                    <MenuItem onClick={ handleClose }>
                                        <ListItemIcon>
                                            <img src={ edit } alt="edit"/>
                                        </ListItemIcon>
                                        <ListItemText> Edit</ListItemText>
                                    </MenuItem>
                                    <MenuItem onClick={ handleClose }>
                                        <ListItemIcon>
                                            <img src={ Delete } alt="delete"/>
                                        </ListItemIcon>
                                        <ListItemText> Delete</ListItemText>
                                    </MenuItem>
                                </Menu>
                            </td>
                        </tr>
                    ) ) }
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <div className='pagination-select'>
                    <div>
                        Rows per page
                    </div>
                    <select>
                        <option>100</option>
                        <option>300</option>
                        <option>500</option>
                        <option>800</option>
                        <option>1000</option>
                    </select>
                </div>
                <div>1-11 of 11</div>
                <div className='pagination-btn'>
                    <button>
                        <img src={ prev } alt="prev"/>
                    </button>
                    <button>
                        <img src={ next } alt="next"/>
                    </button>
                </div>
            </div>
        </>

    );
};

export default AccountTable;

import './style.css'
import { action, prev, next } from '@/shared/utils'
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const AccountTable = () => {
    const account = [ 1, 2, 3, 4, 5, 6, 7, 9, 9 ]

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
            <div className='account-table'>
                <table>
                    <thead>
                    <tr>
                        <th>Account</th>
                        <th>Name</th>
                        <th>Balance</th>
                        <th>Group</th>
                        <th>Device</th>
                        <th>Slim sim</th>
                        <th>Phone</th>
                        <th>Card Numbers</th>
                        <th>Bank</th>
                        <th>Expenses</th>
                        <th>Update at</th>
                        <th>Info</th>
                        <th>Action</th>
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
                            <td>T 12345 123,12</td>
                            <td>02.01.2024 11:50</td>
                            <td></td>
                            <td>
                                <button
                                    id="basic-button"
                                    aria-controls={ open ? 'basic-menu' : undefined }
                                    aria-haspopup="true"
                                    aria-expanded={ open ? 'true' : undefined }
                                    onClick={ handleClick }
                                >
                                    <img src={ action } alt="action"/>
                                </button>
                                <Menu
                                    sx={ {
                                        '& .MuiPaper-root ': {
                                            background: "var(--primary-color)",
                                            color: "#fff"
                                        }
                                    } }
                                    id="basic-menu"
                                    anchorEl={ anchorEl }
                                    open={ open }
                                    onClose={ handleClose }
                                    MenuListProps={ {
                                        'aria-labelledby': 'basic-button',
                                    } }
                                >
                                    <MenuItem onClick={ handleClose }>Profile</MenuItem>
                                    <MenuItem onClick={ handleClose }>My account</MenuItem>
                                    <MenuItem onClick={ handleClose }>Logout</MenuItem>
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

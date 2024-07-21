import { plus, moneyGreen, moneyBlue } from '@/shared/utils'
import { AddAccountPage } from "@/features/add-account";
import { useDispatch } from "react-redux";
import { openModal } from '@/features/add-account/modal/modal.js'

import './style.css'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MessageHeader = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="account-header">
                <div className='account-header-button'>
                    <span>Accounts</span>
                    <button className='add-account' onClick={ () => dispatch( openModal( true ) ) }>
                        <img src={ plus } alt="plus"/>
                        Add Account
                    </button>
                </div>
            </div>
            <AddAccountPage/>
            <div className="account-filter">
                <div className="account-info">
                    <div className="balance">
                        <div className='balance-icon'>
                            <img src={ moneyBlue } alt="blue"/>
                        </div>
                        <div className='balance-info'>
                            <h4>Balance</h4>
                            <h5>11 accounts</h5>
                            <h3>5 900,08</h3>
                        </div>
                    </div>
                    <div className="balance">
                        <div className='balance-icon-green'>
                            <img src={ moneyGreen } alt="blue"/>
                        </div>
                        <div className='balance-info'>
                            <h4>Daily Expression</h4>
                            <h5>11 accounts</h5>
                            <h3>5 900,08</h3>
                        </div>
                    </div>
                </div>
                <div className="account-filter-button">
                    <FormControl className='add-account-select' sx={ {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                        },
                        width:'200px'
                    } }>
                        <InputLabel id="demo-simple-select-label">Group</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Group"
                        >
                            <MenuItem value={ 10 }>Ten</MenuItem>
                            <MenuItem value={ 20 }>Twenty</MenuItem>
                            <MenuItem value={ 30 }>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </>
    );
};

export default MessageHeader;


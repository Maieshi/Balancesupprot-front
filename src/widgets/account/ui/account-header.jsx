import { plus, moneyGreen, moneyBlue } from '@/shared/utils'
import { AddAccountModal } from "@/features/add-account";
import { useDispatch } from "react-redux";
import { openModal } from '@/features/add-account/modal/modal.js'

import './style.css'
import { FormControl, InputLabel, MenuItem, Select,Checkbox,OutlinedInput,ListItemText } from "@mui/material";
import { useState } from "react";

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const AccountHeader = () => {
    const dispatch = useDispatch();

    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

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
            <AddAccountModal/>
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
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={ {
                                PaperProps: {
                                    sx: {
                                        color: "white",
                                        bgcolor: 'var(--primary-color)',
                                    },
                                },
                            } }
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </>
    );
};

export default AccountHeader;


// import { useDispatch } from "react-redux";

import './style.css'
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const sxStyle = {
    width: "20%",
    '& .MuiInputBase-input ': {
        color: "#fff"
    },
    '& .MuiFormLabel-root': {
        color: "var(--secondary-color)",
    },
    '& .MuiSvgIcon-root': {
        fill: "var(--secondary-color)",
    },
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
    }
}

const MessageHeader = () => {
    // const dispatch = useDispatch();
    return (
        <>
            <div className="account-header">
                <div className='account-header-button'>
                    <span>Messages</span>
                </div>
            </div>
            <div className="message-filter">
                <div className="message-filter-inputs">
                    <TextField id="outlined-basic" label="Search Text" variant="outlined"
                               className='add-account-input'
                               sx={ {borderColor: 'var(--secondary-color)'} }/>
                    <FormControl className='add-account-select' sx={ sxStyle }>
                        <InputLabel id="demo-simple-select-label">Account</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Account"
                        >
                            <MenuItem value={ 10 }>Ten</MenuItem>
                            <MenuItem value={ 20 }>Twenty</MenuItem>
                            <MenuItem value={ 30 }>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <DatePicker label="Starting date" sx={ sxStyle }/>
                    <DatePicker label="Ending date" sx={ sxStyle }/>
                    <FormControl className='add-account-select' sx={ sxStyle }>
                        <InputLabel id="demo-simple-select-label">Message Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Message Type"
                        >
                            <MenuItem value={ 10 }>Out going</MenuItem>
                            <MenuItem value={ 20 }>Twenty</MenuItem>
                            <MenuItem value={ 30 }>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="message-reset">
                    <button>Reset</button>
                </div>
            </div>
        </>
    );
};

export default MessageHeader;


import './tabs.css'
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";


const sxStyle = {
    borderColor: 'var(--secondary-color)',
    width: '50%',
    '& .MuiOutlinedInput-root': {
        borderColor: 'var(--border-color)',
        color: '#fff',
        borderRadius: 'var(--border-radius)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--border-color)',
    },
    '& .Mui-Focused': {
        color: '#fff',
        borderColor: 'var(--border-color)'
    }
}

const sxFormStyle = {
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
}

const General = () => {
    return (
        <div className="tabs-general">
            <div className="tabs-form">
                <TextField id="outlined-basic" label="Name" variant="outlined"
                           className='add-account-input'
                           sx={ sxStyle }/>
                <TextField id="outlined-basic" label="Nickname" variant="outlined"
                           className='add-account-input'
                           sx={ sxStyle }/>
            </div>
            <div className="tabs-form">
                <TextField id="outlined-basic" label="Phone Number" variant="outlined"
                           className='add-account-input'
                           sx={ sxStyle }/>
                <TextField id="outlined-basic" label="Address" variant="outlined"
                           className='add-account-input'
                           sx={ sxStyle }/>
            </div>
            <div className="tabs-form">
                <FormControl className='add-account-select' sx={ sxFormStyle }>
                    <InputLabel id="demo-simple-select-label">Chose Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Chose Country"
                    >
                        <MenuItem value={ 10 }>Ten</MenuItem>
                        <MenuItem value={ 20 }>Twenty</MenuItem>
                        <MenuItem value={ 30 }>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="outlined-basic" label="Nickname" variant="outlined"
                           className='add-account-input'
                           sx={ sxStyle }/>
            </div>
            <div className='add-account-text-area'>
                <textarea rows="9" placeholder='About'/>
            </div>
        </div>
    );
};

export default General;
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { close } from '@/shared/utils'
import './style.css'
import { useDispatch } from "react-redux";
import { openModal } from "@/features/add-account/modal/modal.js";

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

export const AddAccountPage = () => {
    const dispatch = useDispatch();
    return (
        <Grid container className='add-account-grid-con'>
            <Grid item className='add-account-grid-item'>
                <div className='add-account-grid-header'>
                    <h4>Add Account</h4>
                    <button onClick={ () => dispatch( openModal( false ) ) }>
                        <img src={ close } alt="close"/>
                    </button>
                </div>
                <form>
                    <div className='add-account-form'>
                        <TextField id="outlined-basic" label="Account Number" variant="outlined"
                                   className='add-account-input'
                                   sx={ sxStyle }/>
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
                        } }>
                            <InputLabel id="demo-simple-select-label">Bank</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Bank"
                            >
                                <MenuItem value={ 10 }>Ten</MenuItem>
                                <MenuItem value={ 20 }>Twenty</MenuItem>
                                <MenuItem value={ 30 }>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='add-account-form'>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined"
                                   className='add-account-input'
                                   sx={ sxStyle }/>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined"
                                   className='add-account-input'
                                   sx={ sxStyle }/>
                    </div>
                    <div className='add-account-form'>
                        <TextField id="outlined-basic" label="Group" variant="outlined"
                                   className='add-account-input'
                                   sx={ sxStyle }/>
                        <TextField id="outlined-basic" label="Device ID" variant="outlined"
                                   className='add-account-input'
                                   sx={ sxStyle }/>
                    </div>
                    <div className='add-account-form'>
                        <TextField id="outlined-basic" label="Sim Slot" variant="outlined"
                                   className='add-account-input'
                                   sx={ sxStyle }/>
                        <TextField id="outlined-basic" label="Initsial balance of total expences" variant="outlined"
                                   className='add-account-input'
                                   sx={ sxStyle }/>
                    </div>
                    <TextField id="outlined-basic" label="Card Numbers (Last 4 digits)" variant="outlined"
                               className='add-account-input'
                               sx={ {borderColor: 'var(--secondary-color)', width: '100%', marginTop: '20px'} }/>
                    <div className='add-account-text-area'>
                        <textarea rows="9" placeholder='Additional Info'/>
                    </div>
                </form>
            </Grid>
        </Grid>
    );
};

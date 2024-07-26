import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { openModal } from "@/features/add-account/modal/modal.js";
import { useDispatch } from "react-redux";
import { close } from '@/shared/utils'
import './style.css'

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

const sxNumberStyle = {
    marginTop: '20px',
    borderColor: 'var(--secondary-color)',
    width: '100%',
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
                                }
                            },

                        } }>
                            <InputLabel id="demo-simple-select-label">Bank</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Bank"
                                MenuProps={ {
                                    PaperProps: {
                                        sx: {
                                            color: "white",
                                            bgcolor: 'var(--primary-color)',
                                        },
                                    },
                                } }
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
                               sx={ sxNumberStyle }/>
                    <div className='add-account-text-area'>
                        <textarea rows="9" placeholder='Additional Info'/>
                    </div>
                    <div className='control-buttons'>
                        <Button sx={ {
                            borderRadius: "var(--border-radius)",
                            borderColor:"var(--secondary-color)",
                            color: 'var(--secondary-color)',
                            '&:hover': {
                                borderColor:"var(--secondary-color)",
                            }
                        } } variant="outlined">Cansel</Button>
                        <Button sx={ {
                            borderRadius: "var(--border-radius)",
                            bgcolor: "white",
                            color: "#000",
                            '&:hover': {
                                bgcolor: "#fff",
                            }
                        } } variant="contained">Save</Button>
                    </div>
                </form>
            </Grid>
        </Grid>
    );
};

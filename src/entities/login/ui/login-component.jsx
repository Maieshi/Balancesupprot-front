import './style.css'
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material";
import { useState } from "react";
import { Visible, VisibleOff } from "@/shared/utils";

const sxStyle = {
    width: '100%',
    color: 'var(--border-color)',
    marginTop: "20px",
    '& .MuiOutlinedInput-root': {
        borderColor: 'var(--border-color)',
        borderRadius: 'var(--border-radius)',
    }
}

const sxButton = {
    '&:hover': {
        backgroundColor:' rgb(196, 205, 213)',
    },
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
    marginTop: "20px",
    width: "100%",
    padding: "8px 16px",
    color: "black",
    backgroundColor: "#fff",
    fontFamily: "'Public Sans', sans-serif",
    fontWeight: "700",
}

const sxFormControl = {
    width: '100%',
    marginTop: "10px",
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

const LoginComponent = () => {
    const [ showPassword, setShowPassword ] = useState( false );

    const handleClickShowPassword = () => setShowPassword( ( show ) => !show );

    const handleMouseDownPassword = ( event ) => {
        event.preventDefault();
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-animation">
                    <dotlottie-player
                        src="https://lottie.host/143a08a9-7ecf-4e28-8201-5eae462acc8a/QhS0G9YzGE.json"
                        speed="1" style={ {width: '500px', height: '500px', background: "transparent"} }
                        loop='true'
                        autoplay="true">
                    </dotlottie-player>
                </div>
                <div className="login-form">
                    <h1>Sign in</h1>
                    <TextField id="outlined-basic" label="Nick name" variant="outlined"
                               className='add-account-input'
                               sx={ sxStyle }/>
                    <FormControl sx={ sxFormControl } variant="outlined"  className='add-account-input'>
                        <InputLabel sx={ {color: sxStyle.color} }
                                    htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={ showPassword ? 'text' : 'password' }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ handleClickShowPassword }
                                        onMouseDown={ handleMouseDownPassword }
                                        edge="end"
                                    >
                                        { showPassword ? <Visible/> : <VisibleOff/> }
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button sx={ sxButton } variant="contained">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
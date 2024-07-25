import './style.css'
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material";
import { useState } from "react";
import { Visible, VisibleOff } from "@/shared/utils";

const sxStyle = {
    borderColor: 'var(--secondary-color)',
    width: '100%',
    marginTop: "20px",
    '& .MuiOutlinedInput-root': {
        borderRadius: 'var(--border-radius)',
    }
}

const sxButton = {
    marginTop: "20px",
    width: "100%",
    padding: "8px 16px",
    color: "black",
    backgroundColor: "#fff",
    fontFamily: "'Public Sans', sans-serif",
    fontWeight: "700",
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
                    <dotlottie-player src="https://lottie.host/143a08a9-7ecf-4e28-8201-5eae462acc8a/QhS0G9YzGE.json"
                                      background="transparent" speed="1" style={ {width: '500px', height: '500px'} }
                                      loop
                                      autoplay></dotlottie-player>
                </div>
                <div className="login-form">
                    <h1>Sign in</h1>
                    <TextField id="outlined-basic" label="Nick name" variant="outlined"
                               className='add-account-input'
                               sx={ sxStyle }/>
                    <FormControl sx={ sxStyle } variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
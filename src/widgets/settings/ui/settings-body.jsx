import './style.css'
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { AddAccountPage } from "@/features/add-account/ui/add-account-page.jsx";


const CustomTabPanel = ( props ) => {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${ index }` }
            aria-labelledby={ `simple-tab-${ index }` }
            { ...other }
        >
            { value === index && <Box sx={ {p: 3} }>{ children }</Box> }
        </div>
    );
}

const ariaProps = ( index ) => {
    return {
        id: `simple-tab-${ index }`,
        'aria-controls': `simple-tabpanel-${ index }`,
    };
}

const sxStyle = {
    color: '#fff'
}

const SettingsBody = () => {
    const [ value, setValue ] = useState( 0 );

    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    };
    return (
        <div className="tab-bar">
            <Box sx={ {borderBottom: 1, borderColor: 'rgba(255,255,255,0.12)'} }>
                <Tabs
                    indicatorColor="primary"
                    textColor="inherit"
                    value={ value }
                    onChange={ handleChange }
                    aria-label="basic tabs example">
                    <Tab sx={ sxStyle } label="Settings" { ...ariaProps( 0 ) } />
                    <Tab sx={ sxStyle } label="Notification" { ...ariaProps( 1 ) } />
                </Tabs>
            </Box>
            <CustomTabPanel value={ value } index={ 0 }>
                <AddAccountPage/>
            </CustomTabPanel>
            <CustomTabPanel value={ value } index={ 1 }>
                Item Two
            </CustomTabPanel>

        </div>
    );
};

export default SettingsBody;
import { AddAccountPage } from "@/features/add-account/ui/add-account-page.jsx";
import './style.css'
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import General from './tabs/general.jsx'
import Notification from './tabs/notification.jsx'

import { UserId, NotifyIcon } from '@/shared/utils'

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
            { value === index && <Box sx={ {py: 3} }>{ children }</Box> }
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
    color: '#fff',
    borderBottomColor: '#fff',
}

const SettingsBody = () => {
    const [ value, setValue ] = useState( 0 );

    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    };
    return (
        <div className="tab-bar">
            <Box>
                <Tabs
                    indicatorColor="primary"
                    textColor="inherit"
                    sx={ {
                        '& .MuiTabs-indicator': {
                            background: '#fff',
                        }
                    } }
                    value={ value }
                    onChange={ handleChange }
                    aria-label="basic tabs example">
                    <Tab icon={ <UserId/> } iconPosition="start"
                         sx={ sxStyle } label="General"
                         { ...ariaProps( 0 ) } />
                    <Tab icon={ <NotifyIcon/> } iconPosition="start"
                         sx={ sxStyle } label="Notification"
                         { ...ariaProps( 1 ) } />
                </Tabs>
            </Box>
            <CustomTabPanel value={ value } index={ 0 }>
                <General/>
            </CustomTabPanel>
            <CustomTabPanel value={ value } index={ 1 }>
                <Notification/>
            </CustomTabPanel>
        </div>
    );
};

export default SettingsBody;
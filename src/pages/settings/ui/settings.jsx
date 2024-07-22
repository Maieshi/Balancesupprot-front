import { Container } from "@mui/material";
import { HeaderComponent } from "@/widgets/header/index.jsx";
import { SettingsHeader, SettingsBody } from '@/widgets/settings'


export const Settings = () => {
    return (
        <Container maxWidth="xl" className='account-container'>
            <HeaderComponent/>
            <SettingsHeader/>
            <SettingsBody/>
        </Container>
    );
};


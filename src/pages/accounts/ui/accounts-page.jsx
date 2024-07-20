import { Container } from "@mui/material";
import { HeaderComponent } from "@/widgets/header";
import { AccountHeader } from "@/widgets/account";

import './style.css'

export const AccountsPage = () => {
    return (
        <Container maxWidth="xl" className='account-container'>
            <HeaderComponent/>
            <AccountHeader/>
        </Container>
    );
};


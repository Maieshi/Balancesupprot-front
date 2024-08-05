import { Container } from "@mui/material";
import { HeaderComponent } from "@/widgets/header";
import { AccountHeader, AccountTable } from "@/widgets/account";

import './style.css'

export const AccountsPage = () => {
    return (
        <Container maxWidth={ false } sx={ {
            maxWidth: "1900px"
        } } className='account-container'>
            <HeaderComponent/>
            <AccountHeader/>
            <AccountTable/>
        </Container>
    );
};


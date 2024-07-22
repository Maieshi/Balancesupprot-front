import { Container } from "@mui/material";
import { HeaderComponent } from "@/widgets/header";
import { MessageTable, MessageHeader } from "@/widgets/messages";

export const MessagesPage = () => {
    return (
        <Container maxWidth="xl" className='account-container'>
            <HeaderComponent/>
            <MessageHeader/>
            {/*<MessageTable/>*/}
        </Container>
    );
};


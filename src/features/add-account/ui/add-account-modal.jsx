import { openModal } from "@/features/add-account/modal/modal.js";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddAccountPage } from './add-account-page.jsx'

export const AddAccountModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector( ( state ) => state.addAccount.addAccount );
    return (
        <>
            <Modal
                disableEnforceFocus
                open={ modal }
                onClose={ () => {
                    dispatch( openModal( false ) )
                } }
                sx={ {width: '50%'} }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <AddAccountPage/>
                </>
            </Modal>
        </>
    );
};


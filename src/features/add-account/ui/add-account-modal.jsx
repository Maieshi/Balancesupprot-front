import { openModal } from "@/features/add-account/modal/modal.js";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddAccountPage } from './add-account-page.jsx'

const sxStyle = {
    width: {
        xs: "70%",
        sm: "50%",
        md: "50%",
        lg: '50%',
        xl: '50%'
    },
    left: {
        xs: '-20%',
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0
    }
}

export const AddAccountModal = () => {
    const dispatch = useDispatch();

    const modal = useSelector( ( state ) => state.addAccount.addAccount );

    return (
        <>
            <Modal disableEnforceFocus
                   open={ modal }
                   onClose={ () => {
                       dispatch( openModal( false ) )
                   } }
                   sx={ sxStyle }
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <>
                    <AddAccountPage/>
                </>
            </Modal>
        </>
    );
};


import { plus } from '@/shared/utils'
import { AddAccountPage } from "@/features/add-account";
import { useDispatch } from "react-redux";
import { openModal } from '@/features/add-account/modal/modal.js'

import './style.css'

const AccountHeader = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="account-header">
                <div className='account-header-button'>
                    <span>Accounts</span>
                    <button className='add-account' onClick={ () => dispatch( openModal( true ) ) }>
                        <img src={ plus } alt="plus"/>
                        Add Account
                    </button>
                </div>
            </div>
            <AddAccountPage/>
        </>
    );
};

export default AccountHeader;


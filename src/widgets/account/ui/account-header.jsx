import { plus } from '@/shared/utils'
import './style.css'

const AccountHeader = () => {
    return (
        <div className="account-header">
            <div className='account-header-button'>
                <span>Accounts</span>
                <button className='add-account'>
                    <img src={ plus } alt="plus"/>
                    Add Account
                </button>
            </div>
        </div>
    );
};

export default AccountHeader;


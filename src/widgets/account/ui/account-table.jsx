import './style.css'
import { action } from '@/shared/utils'

const AccountTable = () => {

    const account = [ 1, 2, 3, 4, 5, 6 ]

    return (
        <div className='account-table'>
            <table>
                <thead>
                <tr>
                    <th>Account</th>
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Group</th>
                    <th>Device</th>
                    <th>Slim sim</th>
                    <th>Phone</th>
                    <th>Card Numbers</th>
                    <th>Bank</th>
                    <th>Expenses</th>
                    <th>Update at</th>
                    <th>Info</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                { account.map( ( account, index ) => (
                    <tr key={ index }>
                        <td>123</td>
                        <td>Matveychik</td>
                        <td>3000.10</td>
                        <td>3</td>
                        <td>3.2</td>
                        <td>2</td>
                        <td>12345678901</td>
                        <td>5000,6543</td>
                        <td>Sberbank</td>
                        <td>T 12345 123,12</td>
                        <td>02.01.2024 11:50</td>
                        <td></td>
                        <td>
                            <button>
                                <img src={ action } alt="action"/>
                            </button>
                        </td>
                    </tr>
                ) ) }

                </tbody>
            </table>
        </div>
    );
};

export default AccountTable;

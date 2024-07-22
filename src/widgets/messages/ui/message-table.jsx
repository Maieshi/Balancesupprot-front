import './style.css'
import { check, close, next, prev } from '@/shared/utils'

const MessageTable = () => {

    const message = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    return (
        <>
            <div className='message-table'>
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Account</th>
                        <th>Name</th>
                        <th>Text</th>
                        <th>Device ID</th>
                        <th>SMS time</th>
                        <th>Card number</th>
                        <th>Bank</th>
                        <th>Channel</th>
                        <th>Incoming</th>
                        <th>Outgoing</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        message.map( ( account, index ) => (
                            <tr key={ index }>
                                <td>28.06.2024 14:59:11</td>
                                <td>8507</td>
                                <td>Sichov</td>
                                <td>schyot123121</td>
                                <td>3,1</td>
                                <td>14:56</td>
                                <td>7451</td>
                                <td>Sberbank</td>
                                <td>sms</td>
                                <td>
                                    <img src={ check } alt="check"/>
                                </td>
                                <td>
                                    <img src={ close } alt="close"/>
                                </td>
                            </tr>
                        ) )
                    }
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <div className='pagination-select'>
                    <div>
                        Rows per page
                    </div>
                    <select>
                        <option>100</option>
                        <option>300</option>
                        <option>500</option>
                        <option>800</option>
                        <option>1000</option>
                    </select>
                </div>
                <div>1-11 of 11</div>
                <div className='pagination-btn'>
                    <button>
                        <img src={ prev } alt="prev"/>
                    </button>
                    <button>
                        <img src={ next } alt="next"/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default MessageTable;

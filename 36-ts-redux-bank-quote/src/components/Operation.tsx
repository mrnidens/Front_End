import { useState } from 'react';
import { deposit, withdraw } from '../actions/accountActions';
import { useDispatch } from 'react-redux';

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input
                onChange={e => setSum(+e.target.value)}
                type="number"
                value={sum}
                min={0}
            />
            <button onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div >
    )
}

export default Operation
import Avatar from './Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Stats as TwitterStats } from '../utils/types';
import { changeStats } from '../actions/statsAction';

const Stats = () => {

const dispatch = useDispatch();
const {followers, following} = useSelector<RootState, TwitterStats>(state => state.stats)
const name = useSelector<RootState, string>(state => state.user.name)
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => dispatch(changeStats('followers', 1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('followers', -1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() =>  dispatch(changeStats('following', 1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('following', -1));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats
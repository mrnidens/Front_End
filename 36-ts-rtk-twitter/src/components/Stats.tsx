import Avatar from './Avatar'
import { changeStats } from '../features/statsSlice';
import {Stats as TwitterStats } from '../utils/types';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Stats = () => {

const dispatch = useAppDispatch();
const {followers, following} = useAppSelector<TwitterStats>(state => state.stats)
const name = useAppSelector<string>(state => state.user.name)
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => dispatch(changeStats({statsType: 'followers', sum: 1}))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats({statsType: 'followers', sum: -1}));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() =>  dispatch(changeStats({statsType: 'following', sum: 1}))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats({statsType: 'following', sum: -1}));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats
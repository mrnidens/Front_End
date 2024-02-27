
import Avatar from './Avatar';

import React, { useContext } from 'react';
import { TwitterContext } from '../utils/context';

const Stats = () => {
    const { user, stats, setStats } = useContext(TwitterContext);

    const increaseStat = (statKey) => {
        setStats(prevStats => ({
            ...prevStats,
            [statKey]: prevStats[statKey] + 1
        }));
    };

    const decrementStat = (statKey) => {
        if (stats[statKey] > 0) {
            setStats(prevStats => ({
                ...prevStats,
                [statKey]: prevStats[statKey] - 1
            }));
        }
    };

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div>
                    <span onClick={() => increaseStat('followers')} onContextMenu={(e) => 
                      { e.preventDefault(); decrementStat('followers') }}>Followers: {stats.followers}
                      </span>
                </div>
                <div>
                    <span onClick={() => increaseStat('following')} onContextMenu={(e) => 
                      { e.preventDefault(); decrementStat('following') }}>Following: {stats.following}
                      </span>
                </div>
            </div>
        </div>
    );
};

export default Stats;
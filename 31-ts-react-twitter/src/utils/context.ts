import React from "react";
import { StatsType, TwitterContextValue } from "./types";
export const TwitterContext = React.createContext<TwitterContextValue>({
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 0,
        following: 0
    },
    changeAvatar: (url:string | null) => {},
    changeName: (name:string | null) => {}, 
    changeStats: (statsType:StatsType, sum:number) => {}
});

export interface User {
    name: string,
    avatar: string
}

export interface Stats {
    followers: number,
    following: number
}

export type StatsType = 'followers' | 'following'

export interface RootState {
    user: User,
    stats: Stats
}
export interface ReduxAction {
    type: string, 
    payload: any;
}

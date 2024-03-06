export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AVATAR = 'CHANGER_AVATAR';

export const changeName = (name: string | null) => ({
    type: CHANGE_NAME, 
    payload: name
})

export const changeAvatar = (url: string | null) => ({
    type: CHANGE_AVATAR, 
    payload: url
})
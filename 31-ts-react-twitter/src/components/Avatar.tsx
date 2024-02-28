import { useContext } from 'react'
import { TwitterContext } from '../utils/context'

interface Props {
  size?: 'small'
}

const Avatar = ({ size }:Props) => {

  const { user, changeAvatar, changeName } = useContext(TwitterContext)

  return (
    <img
      onClick={() => {
        const url = prompt('Enter new avatar url');
        changeAvatar(url);
      }}
      onContextMenu={e => {
        e.preventDefault();
        const name = prompt('Enter new name');
        changeName(name);
      }}
      className={`user-avatar ${size ?? ''}`}
      src={user.avatar}
      alt={user.name}
    />
  )
}

export default Avatar
import { useDispatch, useSelector } from "react-redux";
import { RootState, User } from "../utils/types";
import { changeAvatar, changeName } from "../actions/userActions";


interface Props {
  size?: 'small'
}

const Avatar = ({ size }: Props) => {

  const dispatch = useDispatch();
  const {name, avatar} = useSelector<RootState, User>(state => state.user)

  return (
    <img
      onClick={() => {
        const url = prompt('Enter new avatar url');
        dispatch(changeAvatar(url));
      }}
      onContextMenu={e => {
        e.preventDefault();
        const name = prompt('Enter new name');
        dispatch(changeName(name));
      }}
      className={`user-avatar ${size ?? ''}`}
      src={avatar}
      alt={name}
    />
  )
}

export default Avatar
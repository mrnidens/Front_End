import React, { useContext } from 'react';
import { TwitterContext } from '../utils/context';

const Avatar = ({ size }) => {
  const { user, changeAvatar, changeUsername } = useContext(TwitterContext);

  const handleAvatarClick = (event) => {
    event.preventDefault(); 
    const url = prompt('Enter new avatar url');
    if (url) {
      changeAvatar(url);
    }
  };

  const handleContextMenu = (event) => {
    event.preventDefault(); 
    const newUsername = prompt('Enter new username:', user.name);
    if (newUsername) {
      changeUsername(newUsername);
    }
  };

  return (
    <img
      onClick={handleAvatarClick}
      onContextMenu={handleContextMenu}
      className={`user-avatar ${size ?? ''}`}
      src={user.avatar}
      alt={user.name}
    />
  );
};

export default Avatar;

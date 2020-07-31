import React from 'react';

const UserListItem = ({
  onSelect,
  isSelected,
  user: { firstName, lastName },
}) => {
  const styles = {
    backgroundColor: isSelected ? 'rgba(0,0,0,0.5)' : 'initial',
  };
  return (
    <li style={styles}>
      <span>{`${firstName} ${lastName}`}</span>
      <button onClick={onSelect}>Select me</button>
    </li>
  );
};

export default UserListItem;

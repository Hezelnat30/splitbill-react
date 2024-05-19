import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map(({ id, name, image, balance }) => (
        <Friend
          key={id}
          id={id}
          name={name}
          image={image}
          balance={balance}
          onSelected={onSelected}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

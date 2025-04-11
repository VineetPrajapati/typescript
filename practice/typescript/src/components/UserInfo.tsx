import { FC } from "react";
import { User } from "../types/type";

type UserProp = {
  user: User;
};
const UserInfo: FC<UserProp> = ({ user }) => {
  return (
    <div>
      <h2>User Information: </h2>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;

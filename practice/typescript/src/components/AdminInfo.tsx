import { FC } from "react";
import { Admin } from "../types/type";

type AdminProp = {
  admin: Admin;
};
const AdminInfo: FC<AdminProp> = ({ admin }) => {
  return (
    <div>
      <h2>AdminInfo</h2>
      <p>Id: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;

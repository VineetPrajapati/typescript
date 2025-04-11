import AdminInfo from "./components/AdminInfo";
import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import { Admin, User } from "./types/type";
const user: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@gmail.com",
};
const admin: Admin = {
  id: 2,
  name: "Vineet",
  email: "vineet@gmail.com",
  role: "admin",
  lastLogin: new Date(),
};

const App = () => {
  return (
    <div>
      <Button
        label="Click"
        onClick={() => console.log("Clicked")}
        disabled={false}
      />

      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;

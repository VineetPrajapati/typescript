// import AdminInfo from "./components/AdminInfo";
// import Button from "./components/Button";
// import Counter from "./components/Counter";
// import UserInfo from "./components/UserInfo";
import UserProfile from "./components/UserProfile";
// import { Admin, User } from "./types/type";
// const user: User = {
//   id: 1,
//   name: "John Doe",
//   email: "johndoe@gmail.com",
// };
// const admin: Admin = {
//   id: 2,
//   name: "Vineet",
//   email: "vineet@gmail.com",
//   role: "admin",
//   lastLogin: new Date(),
// };

const App = () => {
  return (
    <div>
      {/* <Button
        label="Click"
        onClick={() => console.log("Clicked")}
        disabled={false}
      />
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
      <Counter /> */}
      <UserProfile />
    </div>
  );
};

export default App;

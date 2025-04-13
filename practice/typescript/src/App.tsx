// import AdminInfo from "./components/AdminInfo";
// import Button from "./components/Button";
// import Counter from "./components/Counter";
// import UserInfo from "./components/UserInfo";
// import Todos from "./components/Todos";
// import UserProfile from "./components/UserProfile";
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

import ContactForm from "./components/ContactForm";
import CounterUsingContext from "./components/CounterUsingContext";
import HandleEvent from "./components/HandleEvent";

// import InputFocus from "./components/InputFocus";

// import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <ContactForm />
      <HandleEvent />
      <CounterUsingContext />
    </div>
  );
};

export default App;

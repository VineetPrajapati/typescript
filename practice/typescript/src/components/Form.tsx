import { FormEvent, useRef, useState } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submitted, setSubmitted] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmitted({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>

      <section>
        <h4>Name: {submitted.name}</h4>
        <h4>Email: {submitted.email}</h4>
        <h4>Password: {submitted.password}</h4>
      </section>
    </form>
  );
};

export default Form;

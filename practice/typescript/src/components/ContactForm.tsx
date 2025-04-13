import { ChangeEvent, FormEvent, useState } from "react";
interface ContactFormState {
  name: string;
  email: string;
}

const ContactForm = () => {
  const [formData, SetFormData] = useState<ContactFormState>({
    name: "",
    email: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form data : ", formData);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Name :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

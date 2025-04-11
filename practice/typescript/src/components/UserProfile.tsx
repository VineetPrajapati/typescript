import { useState } from "react";

interface UserProfileState {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    email: "",
  });
  const handelNameChange = (name: string) => {
    setProfile((prev) => ({ ...prev, name }));
  };
  const handelAgeChange = (age: string) => {
    setProfile((prev) => ({ ...prev, age: Number(age) }));
  };
  const handelEmailChange = (email: string) => {
    setProfile((prev) => ({ ...prev, email }));
  };
  return (
    <section>
      <input
        type="text"
        value={profile.name}
        placeholder="Enter Your Name"
        onChange={(e) => handelNameChange(e.target.value)}
      />
      <input
        type="text"
        value={profile.age > 0 ? profile.age : ""}
        placeholder="Enter Your Age"
        onChange={(e) => handelAgeChange(e.target.value)}
      />
      <input
        type="text"
        value={profile.email}
        placeholder="Enter Your Email"
        onChange={(e) => handelEmailChange(e.target.value)}
      />

      <div>
        <p>
          <strong>Name: {profile.name}</strong>
        </p>
        <p>
          <strong>Age: {profile.age}</strong>
        </p>
        <p>
          <strong>Email: {profile.email}</strong>
        </p>
      </div>
    </section>
  );
};

export default UserProfile;

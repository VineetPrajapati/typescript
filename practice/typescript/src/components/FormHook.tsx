import { useForm } from "react-hook-form";
interface FormData {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  country: string;
  state: string;
  city: string;
  zipCode: number;
}

const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "required" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>You need to pass your first name</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>You need to pass your last name</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: "required field",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            placeholder="country"
            {...register("country", {
              required: "required field",
            })}
          />
          {errors.country && (
            <p style={{ color: "red" }}>{errors.country?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="state">State: </label>
          <input
            type="text"
            placeholder="state"
            {...register("state", {
              required: "required field",

            })}
          />
          {errors.state && (
            <p style={{ color: "red" }}>{errors.state?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            placeholder="city"
            {...register("city", {
              required: "required field",
            })}
          />
          {errors.city && (
            <p style={{ color: "red" }}>{errors.city?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code: </label>
          <input
            type="text"
            placeholder="zip code"
            {...register("zipCode", { required: "required field" })}
          />
          {errors.zipCode && (
            <p style={{ color: "red" }}>{errors.zipCode?.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHook;

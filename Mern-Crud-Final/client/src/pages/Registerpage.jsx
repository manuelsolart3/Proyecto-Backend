import { useForm } from "react-hook-form";
import {registerRequest}  from '../api/auth';

function Registerpage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-zinc-800 max-w-md p-1o rounded-md">
      <form
        onSubmit={handleSubmit(async (values) => {
          console.log(values);
          const res = await registerRequest(values);
          console.log(res);
        })}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md  my-2"
          placeholder="username"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registerpage;

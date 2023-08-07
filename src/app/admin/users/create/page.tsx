"use client";

import { useUsers } from "@/hooks/users.hook";
import { useForm } from "react-hook-form";

export default function CreateUser() {
  const { register, handleSubmit } = useForm();
  const { sendCreate } = useUsers();

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit(sendCreate)}>
        <div>
          <label>Name</label>
          <input {...register("name")} type="text" name="name" id="name" />
        </div>
        <div>
          <label>E-mail</label>
          <input {...register("email")} type="email" name="email" id="email" />
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <label>Is Admin</label>
          <input
            {...register("isAdmin")}
            type="checkbox"
            name="isAdmin"
            id="isAdmin"
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

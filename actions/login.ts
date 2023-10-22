"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function login() {
  const token = jwt.sign(
    {
      sub: "1",
      email: "johndoe@gmail.com",
      name: "John Doe",
    },
    process.env.JWT_SECRET as string
  );

  cookies().set("jwt", token);
}

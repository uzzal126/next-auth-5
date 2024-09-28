"use server";
import { signIn, signOut } from "@/src/app/auth";

export const socialLogin = async (FormData) => {
  const action = FormData.get("action");
  await signIn(action, { redirectTo: "/" });
};

export const logoutHandler = async () => {
  await signOut({ redirectTo: "/login" });
};

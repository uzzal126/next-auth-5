"use server";

import { signIn, signOut } from "@/src/auth";

export const socialLogin = async (formData) => {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/" });
};

export const logoutHandler = async () => {
  await signOut({ redirectTo: "/login" });
};

export const credentialLogin = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

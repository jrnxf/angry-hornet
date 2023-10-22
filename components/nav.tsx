"use server ";

import { LogoutButton } from "@/components/logout-button";
import { LoginButton } from "@/components/login-button";

export function Nav({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div className="flex space-x-4">
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

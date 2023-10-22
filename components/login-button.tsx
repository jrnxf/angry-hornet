import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";

export const LoginButton = () => {
  return (
    <form action={login}>
      <Button>Login</Button>
    </form>
  );
};

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
  return (
    <form action={logout}>
      <Button>Logout</Button>
    </form>
  );
};

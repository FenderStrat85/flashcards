import { signIn, signOut, useSession } from "next-auth/react";
import ActionButton from "../buttons/ActionButton";

export default function SignInSignOutButton() {
  const { data: sessionData } = useSession();

  return (
    <ActionButton
      onClick={sessionData ? () => signOut() : () => signIn()}
      text={sessionData ? "Sign out" : "Sign in"}
    />
  );
}

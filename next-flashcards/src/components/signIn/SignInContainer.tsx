import { Flex, Title } from "@mantine/core";
import SignInSignOutButton from "./SignInSignOutButton";

export default function SignInContainer() {
  return (
    <Flex h="100%" w="100%" direction="column" justify="center" align="center">
      <Title order={1}>Welcome to Flashcards!abc</Title>
      {/* <Title order={3}>Sign in to start learning</Title> */}
      <SignInSignOutButton />
    </Flex>
  );
}

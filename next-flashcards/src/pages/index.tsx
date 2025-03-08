import { type NextPage } from "next";
import { Flex, Title } from "@mantine/core";
import SignInSignOutButton from "../components/signIn/SignInSignOutButton";

const Home: NextPage = () => {
  return (
    <Flex w="100%" h="100%" direction="column" justify="center" align="center">
      <Title order={1}>Welcome to Flashcards! 123</Title>
      <SignInSignOutButton />
    </Flex>
  );
};

export default Home;

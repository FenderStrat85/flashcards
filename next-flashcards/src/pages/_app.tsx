import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";

import "@mantine/core/styles.css";
import { trpc } from "../utils/trpc";

import { Flex, MantineProvider } from "@mantine/core";
import { theme } from "../styles/theme";
import SignInContainer from "../components/signIn/SignInContainer";
import { Text } from "@mantine/core";

const AuthWrapper = ({ Component, pageProps }: any) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  return session ? <Component {...pageProps} /> : <SignInContainer />;
};

const FlashcardApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider theme={theme}>
        <Flex h="100vh" bg="linear-gradient(to bottom, #2e026d, #15162c)">
          <AuthWrapper Component={Component} pageProps={pageProps} />
        </Flex>
      </MantineProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(FlashcardApp);

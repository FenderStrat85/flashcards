import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { flashcardSetRouter } from "./flashcardSet";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  flashcardSet: flashcardSetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

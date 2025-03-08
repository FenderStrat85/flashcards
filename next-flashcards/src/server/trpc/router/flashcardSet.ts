import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const flashcardSetRouter = router({
  createFlashcardSet: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        subject: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.flashcardSet.create({
          data: {
            title: input.title,
            subject: input.subject,
            authorId: input.userId,
          },
        });
      } catch (error) {
        console.log("Error", error);
      }
    }),
});

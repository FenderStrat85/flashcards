import { useSession } from "next-auth/react";
import Link from "next/link";
import { trpc } from "../../utils/trpc";

const AddFlashcards: any = () => {
  const { data: session } = useSession();
  const createFlashcardSet = trpc.flashcardSet.createFlashcardSet.useMutation();
  if (!session) {
    return (
      <>
        <h1>You must be signed in to create a flashcard set</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-black hover:bg-white/20"
            href="/"
          >
            Take me home!
          </Link>
        </div>
      </>
    );
  }

  if (session.user) {
    const user = session?.user;

    const handleFormSubmit = (e: any) => {
      e.preventDefault();
      console.log("title", e.target.title.value);
      console.log("subject", e.target.subject.value);
      console.log("form submitted");
      createFlashcardSet.mutate({
        title: e.target.title.value,
        subject: e.target.subject.value,
        userId: user.id,
      });
    };
    return (
      <>
        <h1>Create Flashcard Set</h1>
        <form onSubmit={handleFormSubmit} method="post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
};

export default AddFlashcards;

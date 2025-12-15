import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-extrabold text-zinc-900 dark:text-white sm:text-6xl">
        Welcome to{" "}
        <span className="text-blue-600 dark:text-blue-400">FranQuiz</span>
      </h1>
      <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300">
        Test your knowledge with our interactive quiz application!
      </p>
      <Link
        href="/questionary"
        className="mt-10 rounded bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
        type="button"
      >
        Start
      </Link>
      <Image
        src="/quiz-illustration.png"
        alt="Quiz Illustration"
        width={600}
        height={400}
        className="mt-12"
      />
    </>
  );
}

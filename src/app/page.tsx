import Link from "next/link";
import { Star, User } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col md:items-center justify-center py-24 px-4">
      <div>
        <h1 className="text-4xl font-bold">I'm Ganesh</h1>

        <div className="nx-mb-8 nx-flex nx-justify-end nx-items-center nx-gap-3">
          <div className="ml-auto pr-4">
            <Link href="/projects" className="underline">
              projects
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-x-6 my-10">
          <p>
            Hi there, I am an <span className="text-sky-400">engineer</span> &{" "}
            <span className="text-sky-400">builder</span> making unusual and
            cool tools.
          </p>
        </div>

        <div>
          <p className="my-2">
            currently learning{" "}
            <span className="text-sky-400">linux administration</span> and{" "}
            <span className="text-sky-400">machine learning</span>
          </p>
          <hr />

          <ul className="my-6 space-y-2 list-disc pl-5">
            <li>
              <span>GitHub : </span>
              <Link href="https://github.com/mc095" className="underline">
                {" "}
                @mc095
              </Link>
            </li>
            <li>
              <span>Email : </span>
              <Link href="mailto:22a81a05q0@sves.org.in" className="underline">
                {" "}
                Let's talk
              </Link>
            </li>
            <li>
              <span>LinkedIn : </span>
              <Link href="https://www.linkedin.com/in/ganesh097" className="underline">
                {" "}
                @Ganesh
              </Link>
            </li>
          </ul>

          <div className="flex flex-row gap-4 mt-6">
            <Link
              href="https://github.com/mc095"
              className="text-sm bg-gray-900 w-36 rounded-xl py-3 px-2 underline flex items-center justify-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span>My Github</span>
            </Link>

            <Link
              href="https://ganesh-mu.vercel.app/"
              className="text-sm bg-gray-900 w-36 rounded-xl py-3 px-2 underline flex items-center justify-center">
              <User className="h-5 w-5 text-yellow-500 mr-2" />
              <span>Contact me</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

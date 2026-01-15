
import Image from "next/image";
import Header from "../app/Navigation/Header";
export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
        <div className="w-[75%] mx-auto py-4">

          <Header />
        </div>

      </main>
    </div>
  );
}

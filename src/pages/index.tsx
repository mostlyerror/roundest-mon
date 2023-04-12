import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center text-2xl font-bold">
        Which Pokemon is Rounder?
      </div>
      <div className="p-2"></div>
      <div className="flex max-w-2xl items-center justify-between rounded border p-8 align-middle">
        <div className="h-16 w-16 bg-red-200"></div>
        <div className="p-8">VS</div>
        <div className="h-16 w-16 bg-blue-200"></div>
      </div>
    </div>
  );
};

export default Home;

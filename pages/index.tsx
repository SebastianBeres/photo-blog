import Head from "next/head";
import { useState } from "react";

import Hello from "@/components/ui/Hello";
import usePosts from "../api/usePosts";

const Home = () => {
  const [status, setStatus] = useState(false);
  const data = usePosts("wycieczka-do-mazowieckiego-parku-krajobrazowego");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div className="flex items-center justify-center h-screen">
          <Hello onClick={() => setStatus(!status)} status={status}>
            {data?.posts.map((post) => {
              return post.title;
            })}
          </Hello>
        </div>
      </main>
    </div>
  );
};

export default Home;

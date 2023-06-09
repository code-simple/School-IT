import Head from "next/head";
import HomeComponent from "@/src/contents/home/HomeComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>School IT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </>
  );
}

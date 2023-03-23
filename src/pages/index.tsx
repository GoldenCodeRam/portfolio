import Head from "next/head";
import Banner from "@/components/banner";

export default function Home() {
    return (
        <>
            <Head>
                <title>@GoldenCodeRam Portfolio</title>
                <meta name="description" content="Hi! This is my portfolio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-full">
                <Banner />
            </main>
        </>
    );
}

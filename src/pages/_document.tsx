import Header from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="flex flex-col">
                <Header />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

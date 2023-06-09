//"use client";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Box maxWidth="1280px" m="auto">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Box>
      </ChakraProvider>
    </>
  );
}

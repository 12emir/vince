import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress"; //nprogress module
import Layout from "../components/Layout.js";
import { ThemeProvider } from "../components/ThemeContext.js";

function handleExitComplete() {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 });
    }
}

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <ThemeProvider>
            <Layout>
                <AnimatePresence
                    exitBeforeEnter
                    onExitComplete={handleExitComplete}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;

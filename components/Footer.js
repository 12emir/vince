import { useState } from "react";
import { useTheme } from "./ThemeContext";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Router, { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div className="w-full  h-96 bg-gray-200  ">
            <SearchForm />
        </div>
    );
};

export default Footer;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "clsx";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "bg-white fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/70 backdrop-blur-md border-b border-white/30 shadow-md text-black"
                    : "bg-transparent text-black"
            )}
            role="banner"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="https://www.asu.edu/" aria-label="Home" target="_blank">
                        <Image src="/logo.png" alt="ASU Logo" width={80} height={80} className="h-14 md:h-20" />
                    </Link>

                    <nav className="hidden md:flex gap-8 text-lg" aria-label="Main navigation">
                        <Link href="/" className="hover:text-yellow-500">Home</Link>
                        <a href="#" className="hover:text-yellow-500">Resources</a>
                        <a href="#" className="hover:text-yellow-500">Tutors</a>
                        <a href="#" className="hover:text-yellow-500">About</a>
                        <a href="#" className="hover:text-yellow-500">Contact</a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-black text-lg">Sign in</button>
                    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">Get Started</button>
                </div>
            </div>
        </header>
    );
}

export default Header;

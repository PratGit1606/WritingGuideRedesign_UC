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
                "bg-asu-white fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out",
                isScrolled
                    ? "bg-asu-white/85 backdrop-blur-md border-b border-asu-gray/15 shadow-md text-asu-black"
                    : "bg-transparent text-asu-black"
            )}
            role="banner"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="https://www.asu.edu/" aria-label="Home" target="_blank">
                        <Image src="/logo.png" alt="ASU Logo" width={80} height={80} className="h-14 md:h-20" />
                    </Link>

                    <nav className="hidden md:flex gap-8 text-lg" aria-label="Main navigation">
                        <Link href="/" className="hover:text-asu-maroon transition-colors">Home</Link>
                        <a href="https://tutoring.asu.edu/" className="hover:text-asu-maroon transition-colors">Tutors</a>
                        <Link href="/#contact" className="hover:text-asu-maroon transition-colors">Contact</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button type="button" className="text-asu-black text-lg hover:text-asu-maroon transition-colors">Sign in</button>
                    <Link href="/Notebook" className="bg-asu-black  text-asu-white px-4 py-2 rounded-full hover:bg-asu-maroon/90 text-base font-medium">Open notebook</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotebook = pathname === "/Notebook";

  if (isNotebook) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow bg-[url(/background.jpeg)] bg-cover bg-center pt-20 pb-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

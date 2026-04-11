import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 to-yellow-100">
      <Header />
      <main className="flex-1 py-9">
        <div className="w-full max-w-5xl mx-auto px-4">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
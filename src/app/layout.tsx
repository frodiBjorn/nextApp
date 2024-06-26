import type { Metadata } from "next";
import classNames from "classnames";
import { Inter } from "next/font/google";

import "./globals.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });
const interRegular = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="wrapper">
            <Header className={classNames("header", interRegular.className)} />
            <main className="main">{children}</main>
            <Footer className="header" />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}

import { Toaster } from "react-hot-toast";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/Navbar/Navbar";

import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import LoginModal from "./components/modals/LoginModal";

import "./globals.css";
import { Nunito } from "next/font/google";
import getCurrentUser from "./actions/getCurrentUser";
import { Suspense } from "react";

export const metadata = {
  title: "Raj's Airbnb Clone",
  description: "Welcome to Airbnb clone...",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "swiper/css";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jurid IA",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${dmSans.className}`}>{children}</body>
    </html>
  );
}

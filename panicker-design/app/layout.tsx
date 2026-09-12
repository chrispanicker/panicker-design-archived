import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris Panicker",
  description: "Chris Panicker is a New York based editorial designer and developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`w-full h-full bg-white`}>
      <head><link rel="stylesheet" href="https://use.typekit.net/kaq6rbu.css"></link></head>
      <body className="w-full h-full tk-times-new-roman text-black bg-white">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import CopyLink from "./components/CopyLink";
import "./globals.css";

export const metadata: Metadata = {
  title: "Y-Sweet Voxel Editor on Netlify",
  description: "Y-Sweet Voxel Editor on Netlify",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-full flex flex-col">
          <div className="h-full relative w-auto">{children}</div>
          <CopyLink />
        </div>
      </body>
    </html>
  );
}

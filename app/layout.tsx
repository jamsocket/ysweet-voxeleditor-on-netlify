import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}

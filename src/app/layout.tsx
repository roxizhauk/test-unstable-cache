import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "unstable_cache",
  description: "To test unstable_cache",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

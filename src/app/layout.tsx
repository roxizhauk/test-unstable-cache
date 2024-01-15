import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "myNextLab",
  description: "This is a lab to test React components and hooks",
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

import { Json } from "@/components/json";
import { Nav } from "@/components/nav";
import { cn } from "@/lib/utils";
import jwt from "jsonwebtoken";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "angry-hornet",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const token = cookies().get("jwt")?.value;

  let cookieUser: any = token
    ? jwt.verify(token, process.env.JWT_SECRET as string)
    : null;

  return (
    <html lang="en">
      <body className={cn(inter.className, "p-4")}>
        <nav className="flex justify-center mb-6 mt-4">
          <Nav isLoggedIn={Boolean(cookieUser)} />
        </nav>
        <div>{children}</div>
        <div>
          <Json
            key={token}
            cookieUser={cookieUser}
            legendText="keyed on cookie"
          />

          <Json cookieUser={cookieUser} legendText="not keyed" />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

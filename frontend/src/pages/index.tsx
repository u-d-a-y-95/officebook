import { Button, Checkbox, Input } from "antd";
import { signOut } from "next-auth/react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        onClick={() => {
          signOut({ callbackUrl: "/auth/signin" });
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}

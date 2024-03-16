import { Button, Checkbox, Input } from "antd";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-[400px]  ">
        <div className="text-center my-8">
          <Link
            href="#"
            className="text-6xl font-semibold text-blue-500 no-underline"
          >
            Jobcan
          </Link>
        </div>
        <div className="p-10 bg-white shadow-xl rounded ">
          <form className="flex flex-col gap-5">
            <Input placeholder="email" className="py-2" />
            <Input placeholder="password" className="py-2" />
            <div className="flex justify-between">
              <div>
                <Checkbox />
                <span className="ml-2">Save login information</span>
              </div>
              <Link href="#">Forgot Password</Link>
            </div>
            <Button type="primary" className="h-10">
              Login
            </Button>
          </form>
          <div className="text-center my-2 uppercase font-bold">or</div>
          <div className="flex flex-col gap-3">
            <Button className="h-10 font-semibold">Login using Google</Button>
            <Button className="h-10 font-semibold">Login using facebook</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

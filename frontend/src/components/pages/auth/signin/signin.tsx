import { Button, Checkbox, Divider, Input, Typography } from "antd";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinFormDefaultvalue, signinFormSchema } from "./helper";
import dynamic from "next/dynamic";
import { InputError } from "@/components/core";
import styles from "./signin.module.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const DevTool: React.ElementType = dynamic(
  () => import("@hookform/devtools").then((module) => module.DevTool),
  { ssr: false }
);

export const SignIn = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: signinFormDefaultvalue,
    resolver: zodResolver(signinFormSchema),
  });

  const signinBtnHandler = async (values: typeof signinFormDefaultvalue) => {
    const res = await signIn("credentials", {
      ...values,
      redirect: false,
    });
    if (res?.status === 200) return router.replace("/");
  };

  return (
    <div className={styles.signin}>
      <div className="flex justify-center items-center h-screen">
        <div className=" w-[400px]  ">
          <div className="text-center my-8">
            <Link
              href="#"
              className="text-4xl font-semibold text-blue-500 no-underline"
            >
              Office Book
            </Link>
          </div>
          <div className="p-10 bg-white shadow-xl rounded ">
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(signinBtnHandler)}
            >
              <div>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Input
                      placeholder="email"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      className="py-2"
                      status={errors.email && "error"}
                    />
                  )}
                />
                <InputError error={errors.email} />
              </div>

              <div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { value, onBlur, onChange } }) => (
                    <Input.Password
                      placeholder="password"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      className="py-2"
                      status={errors.password && "error"}
                    />
                  )}
                />
                <InputError error={errors.password} />
              </div>

              <div className="flex justify-between">
                <div>
                  <Checkbox />
                  <span className="ml-2">Save login information</span>
                </div>
                <Link href="#">Forgot Password</Link>
              </div>
              <Button type="primary" htmlType="submit" className="h-10">
                Login
              </Button>
            </form>
            <div className="text-center my-10 uppercase">
              <Divider dashed style={{ borderColor: "black" }}>
                or
              </Divider>
            </div>
            <div className="flex flex-col gap-3">
              <Button className="h-10 font-semibold">Login using Google</Button>
              <Button className="h-10 font-semibold">
                Login using facebook
              </Button>
            </div>
          </div>
        </div>
        <DevTool control={control} placement="bottom-right" />
      </div>
    </div>
  );
};

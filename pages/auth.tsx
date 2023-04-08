import React, { ReactEventHandler, useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";
type Props = {};

const Auth = (props: Props) => {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState<"login" | "register">("login");

  const router = useRouter();
  // const login = useCallback(async () => {
  //   try {
  //     // const res = await axios.post('https://dummyjson.com/auth/login',{
  //     //   fullname,
  //     //   password
  //     // })
  //     // console.log(res)

  //     await signIn("credentials", {
  //       fullname,
  //       password,
  //       redirect: false,
  //     });

  //     router.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [fullname, password, router]);

  const login = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push("/");
    },
    [router]
  );

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  return (
    <>
      <Head>
        <title>Ocra | Authentication</title>
      </Head>
      <section className="flex h-screen  justify-center items-center ">
        <div className="bg-app-black  w-[90%] lg:w-1/3  rounded-md p-8">
          <div className="flex flex-col items-center">
            {/* < src="/logo-onlyicon.png" alt="" /> */}
            <Image
              src="/logo-onlyicon.png"
              alt="Ocra Logo"
              width={100}
              height={100}
            />
            <h1 className="text-white">
              {variant === "login"
                ? "Login to Your Account"
                : "Register your Account"}
            </h1>
          </div>

          <form onSubmit={login} className="relative mt-5 flex flex-col gap-3">
            {variant === "register" && (
              <Input
                id="fullname"
                label="fullname"
                type="text"
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
              />
            )}
            <Input
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* remember me and forgot pass */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-white">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-white hover:text-[#194391] transition duration-300"
              >
                Forgot Password?
              </a>
            </div>

            <button className="text-white bg-[#194391] font-medium mt-5 hover:bg-[#19376D] transition duration-300 p-2 rounded-md ">
              {variant === "register" ? "Register" : "Login"}
            </button>

            <div className="text-white text-center mt-5">
              <p>
                {variant === "login"
                  ? "New OcraTv enjoyer? "
                  : "Already have an account? "}
                <span
                  onClick={toggleVariant}
                  className="cursor-pointer text-[#2a59b1] hover:underline transition duration-300"
                >
                  Create an Account
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Auth;

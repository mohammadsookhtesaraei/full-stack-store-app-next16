"use client";

// next

import { useRouter } from "next/navigation";


import { signIn } from "next-auth/react";

// component wrapper container
import Container from "@/components/container/Container";

// import useForm from react hook form

import { useForm } from "react-hook-form";

// import zod resolver from resolver/zod
import { zodResolver } from "@hookform/resolvers/zod";

// import zod as z name
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";

// create zod schema validation

const schema = z
  .object({
    email: z.email({ pattern: z.regexes.email }),
    password: z.string().min(6, "at least six characters"),
  })
 

// formData type
type FormDataType = z.infer<typeof schema>;

const LoginPage= () => {

    // router 

    const router=useRouter();
  // form state use reactHook formState
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    // mode: "onChange",
  });

  const onSubmit = async (data: FormDataType) => {
   
      const res = await signIn("credentials",{
        email:data.email,
        password:data.password,
        redirect: false,
      });

      if(res?.error){
        toast.error("email or password incorrect")
        return
      }else {
         toast.success("login successfully");
         setTimeout(()=>{
            router.push("/")
         },1000)
      }
    }

  return (
    <div>
      <Container>
        <div className=" flex justify-center">
          <form
            className="mt-5 w-8/12 bg-gray-100 p-4 rounded-md border border-gray-500/35"
            onSubmit={handleSubmit(async (data) => await onSubmit(data))}
          >
            <fieldset disabled={isSubmitting} className="w-6/12">
              {/* title */}
              <h1 className="font-bold text-3xl text-center mb-8 capitalize text-gray-600/75">
                login Form
              </h1>

              {/* email */}
              <div className="flex flex-col  mb-1.5">
                <label
                  className="mb-2 capitalize text-gray-500"
                  htmlFor="email"
                >
                  email
                </label>
                <input
                  className={
                    errors.email
                      ? "border border-red-400 text-red-400 ps-4 py-1 border-dashed focus:outline-none focus:border-solid focus:border-red-400 focus:text-red-400 rounded"
                      : "border border-gray-400 text-gray-400 ps-4 py-1 border-dashed focus:outline-none focus:border-solid focus:border-blue-400 focus:text-blue-400 rounded"
                  }
                  type="email"
                  placeholder="email"
                  id="email"
                  {...register("email")}
                />
                <p className="h-9 text-red-500 flex items-start pl-2">
                  {errors?.email && <span>{errors.email?.message}</span>}
                </p>
              </div>

              {/* password */}
              <div className="flex flex-col mb-1.5">
                <label
                  className="mb-2 capitalize text-gray-500"
                  htmlFor="password"
                >
                  password
                </label>
                <input
                  className={
                    errors.password
                      ? "border border-red-400 text-red-400 ps-4 py-1 border-dashed focus:outline-none focus:border-solid focus:border-red-400 focus:text-red-400 rounded"
                      : "border border-gray-400 text-gray-400 ps-4 py-1 border-dashed focus:outline-none focus:border-solid focus:border-blue-400 focus:text-blue-400 rounded"
                  }
                  type="password"
                  placeholder="password"
                  id="password"
                  {...register("password")}
                />
                <p className="h-9 text-red-500 flex items-start pl-2">
                  {errors?.password && <span>{errors.password?.message}</span>}
                </p>
              </div>     
              <button
                className="bg-slate-900 w-full py-1 rounded-md text-white hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out cursor-pointer"
                type="submit"
              >
                {isSubmitting ? "sending" : "send"}
              </button>
            </fieldset>
          </form>
          <Toaster />
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;

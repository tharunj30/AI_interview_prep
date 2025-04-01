"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image";


const formSchema = z.object({
  username: z.string().min(2).max(50),
})

import React from 'react'
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const authFormSchema = (type:FormType)=>{
  return z.object({
    name:type === 'sign-up' ? z.string().min(3):z.string().optional(),
    email:z.string().email(),
    password:z.string().min(3),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type==='sign-up'){
        toast.success('Account created successfully.Please sign in.');
        router.push('/sign-in')
      } else {
        toast.success('Sign in successfully.');
        router.push('/')
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`)
      
    }
  }
  const isSignIn = type ==='sign-in';
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="card-border lg:min-w-[590px]">
        <div className="card p-8">
          <div className="flex flex-col gap-6 card py-14 x-10 ">
            <div className="flex flex=row gap-2 justify-center">
              <Image src="/logo.svg" alt="logo" height={32} width={38} />
              <h2 className="text-primary-100">PrepWise</h2>
            </div>
            <h3 className="text-center">Practice job interview wit AI</h3>
          </div>

          <Form {...form}>
  <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="w-full space-y-6 mt-4 form"
  >
    {!isSignIn && (
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Your Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )}

    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="Your email address" type="email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input placeholder="Enter your password" type="password" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <Button className="btn" type="submit">
      {isSignIn ? "Sign In" : "Create an Account"}
    </Button>
  </form>
</Form>

          <p className="text-center mt-4">
            {isSignIn?'No account yet?': 'Have an account already?'}
            <Link href={!isSignIn? '/sign-in':'/sign-up'} className="font-bold text-user-primary ml-1">{!isSignIn?"Sign in":"Sign up"}</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
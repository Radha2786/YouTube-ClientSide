import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginService } from '@/services/user.service'
import useAuth from '@/hooks/useAuth'
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(6 , {
    message: "Username must be at least 6 characters.",
  }),
  email: z.string().email().min(10 , {
    message: "Invalid email"
  }),
  password: z.string().min(8 , {
    message: "Password sholud be of 8 characters"
  })
})

const LoginForm = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email:"",
    },
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    setLoading(true)
    try {
    const res = await loginService(values.username , values.email , values.password);
    // const {user, accessToken , refreshToken} = res.data;
    // const user = response
    const accessToken = res.accessToken;
    const refreshToken = res.refreshToken;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    login(res.user);
    navigate('/');
    console.log("navigate to home page");
    console.log(res);
  } catch(error){
    console.log(error);
    setLoading(false);
  }
  }

  if(loading) return <h1>Loading ..... </h1>
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 bg-slate-100 w-64" style={{ width: '30%' , display:"flex", flexDirection:"column", padding:"2rem", gap:"10px", color:"black", borderRadius:"10px", }}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
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
                <Input placeholder="*****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default LoginForm

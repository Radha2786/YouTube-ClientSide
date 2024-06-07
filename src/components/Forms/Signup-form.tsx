import React, {useState} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
import {registerService} from '@/services/user.service'
import { useNavigate } from "react-router-dom";
import useAuth from '@/hooks/useAuth'

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(6 , {
    message: "Username must be at least 6 characters.",
  }),
  fullName: z.string().min(8 , {
    message: "fullName must be at least 8 characters.",
  }),
  email: z.string().email().min(10 , {
    message: "email is required.",
  }),
  password: z.string().min(8 , {
    message: "password should be of 8 characters.",
  }),
  avatar: z.instanceof(File,{
    message: "Avatar is required.",
    }),
  coverImage: z.instanceof(File).optional(),

})

const Signupform = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
      avatar: new File([],""),
      coverImage: new File([],""),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("values of form are",values);
    setLoading(true)
    try{
      const res = await registerService(values);
      const accessToken = res.accessToken;
      const refreshToken = res.refreshToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      login(res.user);
      navigate('/');
      // const {user, accessToken , refreshToken} = res;
      // localStorage.setItem('accessToken', accessToken);
      // localStorage.setItem('refreshToken', refreshToken);
      // login(user);
      // navigate('/');
      console.log("response is",res);
    } catch(error:any){
      console.log("error is",error);
      setLoading(false);
    } finally{
      setLoading(false);
    }
   
  }

  if(loading) return <h1>Loading ..... </h1>
  return (
    <Form {...form} >
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
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>fullName</FormLabel>
              <FormControl>
                <Input placeholder="fullName" {...field} />
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
              <FormLabel>email</FormLabel>
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
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="avatar"
          render={({field}) => (
            <FormItem>
              <FormLabel htmlFor='avatar'>Avatar</FormLabel>
              <FormControl>
                <Input 
                  accept=".jpg .jpeg, .png, .svg, .gif, .mp4"
                  type="file"
                  onChange={(e) => 
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coverImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='coverImage'>coverImage</FormLabel>
              <FormControl>
                <Input 
                  accept=".jpg .jpeg, .png, .svg, .gif, .mp4"
                type="file" 
                onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)

                } 
                />
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

export default Signupform

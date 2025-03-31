"use client"
import React, { useId, useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { login } from '@/app/actions/auth-actions'
import { redirect } from 'next/navigation'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter the valid email address"
  }),
  password: z.string().min(8,{
    message: "Please should be atleast 8 characters long"
  }),
})

const LoginForm = ({className}: {className?:string}) => {

    const [loading, setLoading] = useState(false);
  
    const toastId = useId();
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Signing in...", {id: toastId})
    setLoading(true);

    const formData = new FormData()
    formData.append('email', values.email)
    formData.append('password', values.password)

    // lets call our server action
    const {success, error} = await login(formData)

    if(!success){
      toast.error(String(error), {id: toastId})
      setLoading(false)
    } else{
      toast.success("login success!" , {id: toastId})
      setLoading(false)
      redirect('/fertilizer-recommendation')
    }

    console.log(values);
  }


  return (
    <div className={cn('grid gap-4', className)}>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
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
                <Input placeholder="Enter Your Password  " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full'>{
              loading && <Loader2 className="animate-spin mr-2 h-2 w-4 "/>
            }Login</Button>
      </form>
    </Form>
    </div>
  )
}

export default LoginForm
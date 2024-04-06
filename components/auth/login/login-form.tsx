'use client'
import { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from '@/components/ui/card';
import { ModeToggle } from '@/components/ui/theme-toggle';
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SubmitButton } from '@/components/auth/submit-button';
import { useTheme } from 'next-themes'
import githubDark from '@/assets/oauth/github-mark.svg'
import google from '@/assets/oauth/icons8-google.svg'
import githubLight from '@/assets/oauth/github-mark-white.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button';

type OauthProviders = ("google" | "github")[];
export function Login() {

    return ( 
        <Card className='w-[350px]'>
        <CardHeader className='flex flex-row align-middle items-center justify-between'>
          <h1 className='text-2xl'>Login</h1>
          <ModeToggle />
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
            Don't have an account? <a href='/auth/signup' className='text-blue-500'><Button variant='link' className='text-normal'>Sign Up</Button></a>
          </CardFooter>
      </Card>
    );
}

const schema = z.object({
    username: z.string().min(3, { message: "Username must be atleast 2 characters." }).max(10, { message: "Username must be no more that 10 characters." }),
    password: z.string().min(6, {message: "Password must be atleast 6 characters."}),
})

function LoginForm() {

  const { theme } = useTheme();
  const github = theme === 'dark' ? githubLight : githubDark; 

  const [OauthAvailable, setOauthAvailable] = useState<OauthProviders>([]);

  useEffect(() => {
    fetch('/api/oauth/providers')
      .then((res) => res.json())
      .then((data) => {
        setOauthAvailable(data.providers as OauthProviders);
      });
  }, []);



  const form = useForm<z.infer<typeof schema>>(
    {
      resolver: zodResolver(schema),
      defaultValues: {
        username: "",
        password: ""
      }
    }
  )
  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data)
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex justify-center flex-col">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => <FormInput field={field} name="Username" />}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => <FormInput field={field} name="Password" type="password" />}
        />
        <div>
          <SubmitButton type='submit' className="mt-4">Login</SubmitButton>
        </div>
        {OauthAvailable.includes("google") && (
            <div className='flex justify-center w-full'>
            <SubmitButton variant='secondary' className=' w-full'><Image src={github} height={24} width={24} alt='google Logo' className='mr-2'/><p>Login with Github</p></SubmitButton>
            </div>
          )
        }
        {OauthAvailable.includes("github") && (
          <div className='flex justify-center w-full'>
          <SubmitButton variant='secondary' className=' w-full '><Image src={google} height={24} width={24} alt='google Logo' className='mr-2'/><p>Login with Google</p></SubmitButton>
          </div>
        )}
      </form>
    </Form>
  )
}


function FormInput({ field, name, type = 'text' }: { field: any, name: string, type?: 'text' | 'password' }) {
  return (
      <FormItem>
          <FormLabel>{name}</FormLabel>
          <FormControl>
              <Input type={type} placeholder={name} {...field} />
          </FormControl>
          <FormMessage />
      </FormItem>
  )
}
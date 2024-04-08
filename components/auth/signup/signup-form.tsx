import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from '@/components/ui/card';
import { ModeToggle } from '@/components/ui/theme-toggle';
import { useState, useEffect } from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { TriangleAlert, Loader2, Loader } from 'lucide-react';
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/components/ui/use-toast"
import { useTheme } from 'next-themes'
import githubDark from '@/assets/oauth/github-mark.svg'
import google from '@/assets/oauth/icons8-google.svg'
import githubLight from '@/assets/oauth/github-mark-white.svg'
import Image from 'next/image'
import { SubmitButton } from '@/components/auth/submit-button';


export function Signup(otp: string | null = null) {
    return ( 
        <Card className='w-[350px]'>
        <CardHeader className='flex flex-row align-middle items-center justify-between'>
          <h1 className='text-2xl'>Sign Up</h1>
          <ModeToggle />
        </CardHeader>
        <CardContent>
          <SignupForm otp={otp} />
        </CardContent>
        <CardFooter>
            Already have an account? <a href='/auth/login' className='text-blue-500'><Button variant='link' className='text-normal'>Login</Button></a>
          </CardFooter>
      </Card>
    );
}

const schema = z.object({
    username: z.string().min(3, {message: "Username must be atleast 3 characters."}).max(20, {message: "Username must be no more that 10 characters."}),
    email: z.string().email({ message: "Invalid email address."}),
    password: z.string().min(6, {message: "Password must be atleast 6 characters."}),
    confirmPassword: z.string().min(6, {message: "Password must be atleast 6 characters."}),
  }) .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );


type OauthProviders = ("google" | "github")[];
function SignupForm(otp: string | null = null) {
  const { theme } = useTheme();
  const github = theme === 'dark' ? githubLight : githubDark; 

  const [OauthAvailable, setOauthAvailable] = useState<OauthProviders>([]);
  const [errors, setErrors] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    fetch('/api/oauth/providers')
      .then((res) => res.json())
      .then((data) => {
        setOauthAvailable(data.providers as OauthProviders);
      });
  }, []);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    setWaiting(true);
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex justify-center flex-col">
        <FormField 
          control={form.control}
          name="username"
          render={({field}) => {
            return (
                <FormInput field={field} name="Username"/>
            )
          }}
        />
        <FormField 
          control={form.control}
          name="email"
          render={({field}) => {
            return (
                <FormInput field={field} name="Email"/>
            )
          }}
        />
        <FormField 
          control={form.control}
          name="password"
          render={({field}) => {
            return (
                <FormInput field={field} name="Password" type="password"/>
            )
          }}
        />
        <FormField 
          control={form.control}
          name="confirmPassword"
          render={({field}) => {
            return (
                <FormInput field={field} name="Confirm Password" type="password"/>
            )
          }}
        />
        <div className='flex justify-center w-full'>
        <SubmitButton type="submit" className='mt-4 w-full' error={errors} loading={waiting}>Create Account</SubmitButton>
        </div>
          {OauthAvailable.includes("github") && (
            <div className='flex justify-center w-full'>
              <SubmitButton variant='secondary' className=' w-full'><Image src={githubLight} height={24} width={24} alt='google Logo' className='mr-2 dark:scale-100 scale-0 absolute dark:relative'/><Image src={githubDark} height={24} width={24} alt='google Logo' className='mr-2 visible dark:hidden'/><p>Sign Up with Github</p></SubmitButton>
            </div>
          )
        }
        {OauthAvailable.includes("google") && (
          <div className='flex justify-center w-full'>
          <SubmitButton variant='secondary' className=' w-full'><Image src={google} height={24} width={24} alt='google Logo' className='mr-2'/><p>Sign Up with Google</p></SubmitButton>
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
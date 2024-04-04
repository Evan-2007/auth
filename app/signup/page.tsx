'use client';
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
import { OtpInput } from '@/components/signup/otp';
export default function SignupPage() {
  const [validOtp, setValidOtp] = useState(false);

  if (validOtp) {
    return (
      <div className='h-screen w-screen'>
        <div className='absolute'>
          <ModeToggle />
        </div>
        <div className='flex h-full w-full items-center justify-center'>
          <Card className='w-[350px]'>
            <CardHeader>
              <h1>Sign Up</h1>
            </CardHeader>
            <CardContent>
              <p>Sign up for an account</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return <OtpInput onVerify={setValidOtp} />;
}

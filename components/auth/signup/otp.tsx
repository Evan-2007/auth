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

interface otpProps {
  onVerify: (valid: boolean) => void;
}

export function OtpInput(props: otpProps) {
  const [value, setValue] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [invalidOtp, setInvalidOtp] = useState(false);

  useEffect(() => {
    async function validateOtp() {
      setInvalidOtp(false);
      if (value?.toString().length === 6) {
        setOtpLoading(true);
        const response = await fetch('/api/verify-otp', {
          method: 'POST',
          body: JSON.stringify({ otp: value }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setTimeout(() => {
          if (response.status === 200) {
            props.onVerify(true);
            setInvalidOtp(false);
          } else {
            props.onVerify(false);
            setInvalidOtp(true);
          }
          setOtpLoading(false);
        }, 1000);
      }
    }
    validateOtp();
  }, [value, props]);

  return (
    <div className='h-screen w-screen'>
      <div className='flex h-full w-full items-center justify-center'>
        <Card className='w-[350px] justify-center'>
        <CardHeader className='flex flex-row align-middle items-center justify-between text-2xl'>
            <h1>Enter Code</h1>
            <ModeToggle />
          </CardHeader>
          <CardContent className='justify-center'>
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <CardFooter className='mt-6 justify-center flex flex-col'>
              {otpLoading && (
                <div className='flex h-10 w-72 items-center justify-center rounded  align-middle'>
                  <Loader2 size={30} className='animate-spin text-green-500 ' />
                </div>
              )}
              {invalidOtp && (
                <div className='flex h-10 w-72 items-center justify-center rounded align-middle'>
                  <TriangleAlert size={30} className='ml-10 text-red-500' />
                  <p className='w-56 text-center text-lg text-red-500'>
                    Invalid OTP
                  </p>
                </div>
              )}
              <div className='flex flex-col justify-center text-center'>
                  <p className='mt-5'>
                  Please request an invite form an admin if you do not have a code.
                </p>
                  <div className='mt-3'>
                    Already have an account? <a href='/auth/login' className='text-blue-500'><Button variant='link' className='text-normal'>Login</Button></a>
                  </div>
              </div>
            </CardFooter>
          </CardContent>
          <CardFooter className='flex justify-center text-center'>

          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

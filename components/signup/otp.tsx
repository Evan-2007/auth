import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import {ModeToggle } from '@/components/ui/theme-toggle';
import { useState, useEffect } from 'react';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
  } from "@/components/ui/input-otp"
import { TriangleAlert, Loader2, Loader } from 'lucide-react';

interface otpProps {
    onVerify: (valid: boolean) => void
}

export function OtpInput (props: otpProps) {

    const [value, setValue] = useState('')
	const [otpLoading, setOtpLoading] = useState(false)
	const [invalidOtp, setInvalidOtp] = useState(false)

	useEffect(() => {

		async function validateOtp() {
            setInvalidOtp(false)
			if (value?.toString().length === 6){
				setOtpLoading(true)
				const response = await fetch('/api/verify-otp', {
					method: 'POST',
					body: JSON.stringify({ otp: value }),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const data = await response.json()
				setTimeout(() => {
					if (response.status === 200) {
						props.onVerify(true)
						setInvalidOtp(false)
					} else {
						props.onVerify(false)
						setInvalidOtp(true)
					}
					setOtpLoading(false)
				}, 1000)

			}
		}
		validateOtp()
	}, [value])


  return (
<div className='w-screen h-screen'>
<div className='absolute'>
    <ModeToggle />	
</div>		
<div className='w-full h-full flex justify-center items-center'>
    <Card className='w-[350px] justify-center'>
        <CardHeader>
        <h1>Enter Code</h1>
        </CardHeader>
        <CardContent className='justify-center'>
            <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
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
            <CardFooter className='justify-center mt-6'>
                {otpLoading &&
                    <div className='justify-center items-center flex align-middle w-72 h-16 bg-background border-border border rounded'>
                            <Loader2 size={30} className='text-green-500 animate-spin '/>
                    </div>
                }
                {
                    invalidOtp &&
                    <div className='justify-center items-center flex align-middle w-72 h-16 bg-background border-border border rounded'>
                            <TriangleAlert size={30} className='text-red-500 ml-10'/>
                            <p className='text-red-500 text-lg w-56 text-center'>Invalid OTP</p>
                    </div>
                }
            </CardFooter>
        </CardContent>
    </Card>	
</div>
</div>
  );
}
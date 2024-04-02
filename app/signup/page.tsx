'use client'
import { Card, CardContent, CardHeader, } from '@/components/ui/card';
import {ModeToggle } from '@/components/ui/theme-toggle';
import { useState, useEffect } from 'react';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
  } from "@/components/ui/input-otp"

export default function SignupPage() {
	const [ validOtp, setValidOtp ] = useState(false)
	const [value, setValue] = useState<number>()

	useEffect(() => {
		async function validateOtp() {
			if (value?.toString().length === 6){
				await fetch('/api/verify-otp', {
					method: 'POST',
					body: JSON.stringify({ otp: value }),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			}
		}
		validateOtp()
	}, [value])

	if (validOtp) {
		return (
			<div className='w-screen h-screen'>
			<div className='absolute'>
				<ModeToggle />	
			</div>		
			<div className='w-full h-full flex justify-center items-center'>
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
		)
	}

	return (
		<div className='w-screen h-screen'>
			<div className='absolute'>
				<ModeToggle />	
			</div>		
			<div className='w-full h-full flex justify-center items-center'>
				<Card className='w-[350px]'>
					<CardHeader>
					<h1>Enter Code</h1>
					</CardHeader>
					<CardContent>
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
					</CardContent>
				</Card>	
			</div>
		</div>
	  );
}
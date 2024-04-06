'use client';
import { useState, useEffect } from 'react';
import { OtpInput } from '@/components/signup/otp';
import { Signup } from '@/components/auth/signup/signup-form';




export default function SignupPage() {
  const [validOtp, setValidOtp] = useState(false);

  if (validOtp) {
    return (
      <div className='h-screen w-screen'>
        <div className='flex h-full w-full items-center justify-center'>
          <Signup />
        </div>
      </div>
    );
  }

  return <OtpInput onVerify={setValidOtp} />;
}

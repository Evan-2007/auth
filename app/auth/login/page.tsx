import {Login} from '@/components/auth/login/login-form';

export default function LoginPage() {
    return (
        <div className='h-screen w-screen'>
          <div className='flex h-full w-full items-center justify-center'>
            <Login />
          </div>
        </div>
    );
}
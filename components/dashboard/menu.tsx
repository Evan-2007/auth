import {Button} from '@/components/ui/button';
import Link from 'next/link';

export function Menu() {
  return (
    <div className='fixed top-0 z-10 h-screen w-64 border-r border-border bg-card mt-14'>
      <div>
        <div>
          <Link href='/dashboard'>
            <Button variant='link' className='w-full mt-4 text-xl'>Overview</Button>
          </Link>
          <Link href='/dashboard'>
            <Button variant='link' className='w-full mt-4 text-xl'>Apps</Button>
          </Link>
          <Link href='/dashboard'>
            <Button variant='link' className='w-full mt-4 text-xl'>Account</Button>
          </Link>
          <Link href='/dashboard'>
            <Button variant='link' className='w-full mt-4 text-xl'>My Apps</Button>
          </Link>
          <Link href='/dashboard'>
            <Button variant='link' className='w-full mt-4 text-xl'>Sessions</Button>
          </Link>
          <Link href='/dashboard'>
            <Button variant='link' className='w-full mt-4 text-xl'></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

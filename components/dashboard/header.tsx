import { ModeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navbar() {
  const user = {
    name: 'John Doe',
    email: 'test@test.com',
    picture: 'https://avatars.githubusercontent.com/u/65788884?v=4',
    permissions: ['admin', 'user', 'editor'],
    status: 'active',
  };

  return (
    <div className='fixed top-0 z-30 flex h-14 w-screen items-center'>
      <div className='absolute h-14 w-screen border-b border-border bg-card opacity-90'></div>

      <div className='z-40'>
        <div>
          <div className='ml-8'>
            <ModeToggle />
          </div>
        </div>
        <div className='absolute right-4 top-0 flex h-14 flex-row items-center'>
          <Link href='/dashboard/invite'>
            <Button variant='link' className=' mr-2 text-base'>
              Sign Out
            </Button>
          </Link>

          <Link href='/dashboard/invite'>
            <Button variant='link' className=' mr-2 text-base'>
              Dashboard
            </Button>
          </Link>

          <Link href='/dashboard/invite'>
            <Button variant='link' className=' mr-2 text-base'>
              Invite
            </Button>
          </Link>

          <img src={user.picture} alt='' className='h-8 w-8 rounded-full' />
        </div>
      </div>
    </div>
  );
}

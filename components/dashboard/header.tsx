import {ModeToggle} from '@/components/ui/theme-toggle'

export function Navbar(){

    const user = {
        name: 'John Doe',
        email: 'test@test.com',
        picture: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        permissions: ['admin', 'user', 'editor'],
        status: 'active',
    }

    return (
        <div className='w-screen h-16 bg-card border-b border-border flex items-center'>
            <div>
            <div className="ml-8">
                <ModeToggle />
                </div>
            </div>
            <div className='right-4 absolute flex flex-row items-center'>


                <p className='mr-8'>
                    Sign Out
                </p>
                <p className='mr-8'>
                    Dashboard 
                </p>
                <p className='mr-8'>
                    Invite
                </p>
                <img src={user.picture} alt="" className='h-8 w-8 rounded-full'/>

            </div>
    </div>
    )
}
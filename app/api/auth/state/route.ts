export function GET() {
    return new Response(
        JSON.stringify({
            status: 200,
            Headers: {
                'Content-Type': 'application/json',
            },

                message: 'allowed',
                account: account

        })
    )
}

const account = {
    name: 'John Doe',
    email: 'test@test.com',
    picture: 'https://avatars.githubusercontent.com/u/65788884?v=4',
    permissions: ['admin', 'user', 'editor'],
    status: 'active',
    sessions: [
      {
        device: 'Chrome',
        location: 'New York',
        ip: '1.1.1.1',
        lastActive: '2021-10-10',
      },
      {
        device: 'Safari',
        location: 'California',
        ip: '2.2.22',
        lastActive: '2021-10-11',
      },
      {
        device: 'Firefox',
        location: 'Texas',
        ip: '3.3.3.3',
        lastActive: '2021-10-12',
      },
      {
        device: 'Chrome',
        location: 'New York',
        ip: '1.1.1.1',
        lastActive: '2021-10-10',
      },
      {
        device: 'Safari',
        location: 'California',
        ip: '2.2.22',
        lastActive: '2021-10-11',
      },
      {
        device: 'Firefox',
        location: 'Texas',
        ip: '3.3.3.3',
        lastActive: '2021-10-12',
      },
      {
        device: 'Chrome',
        location: 'New York',
        ip: '1.1.1.1',
        lastActive: '2021-10-10',
      },
      {
        device: 'Safari',
        location: 'California',
        ip: '2.2.22',
        lastActive: '2021-10-11',
      },
      {
        device: 'Firefox',
        location: 'Texas',
        ip: '3.3.3.3',
        lastActive: '2021-10-12',
      },
    ],
    applications: [
      {
        name: 'Dashboard',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/dashboard',
        id: '11111',
      },
      {
        name: 'Settings',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/settings',
        id: '111111',
      },
      {
        name: 'Profile',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/profile',
        id: 'dwadwadwad',
      },
      {
        name: 'Dashboard',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/dashboard',
        id: 'dwafsqfqaf',
      },
      {
        name: 'Settings',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/settings',
        id: 'oiuyt8w7eq',
      },
      {
        name: 'Profile',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/profile',
        id: 'dwa1qwwerq',
      },
      {
        name: 'Dashboard',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/dashboard',
        id: 'dwafw3141',
      },
      {
        name: 'Settings',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/settings',
        id: 'wioyuoh',
      },
      {
        name: 'Profile',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/profile',
        id: 'luighkuvb',
      },
      {
        name: 'Dashboard',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/dashboard',
        id: 'uikogbhk',
      },
      {
        name: 'Settings',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/settings',
        id: 'uytfudawd',
      },
      {
        name: 'Profile',
        icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
        url: '/profile',
        id: 'piowafaf',
      },
    ],
  };
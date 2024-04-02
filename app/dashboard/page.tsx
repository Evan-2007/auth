import {Card, CardContent, CardHeader, CardFooter} from '@/components/ui/card'
import React, { useState, useEffect } from 'react'

export default function Page(){
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
                lastActive: '2021-10-10'
            },
            {
                device: 'Safari',
                location: 'California',
                ip: '2.2.22',
                lastActive: '2021-10-11'
            },
            {
                device: 'Firefox',
                location: 'Texas',
                ip: '3.3.3.3',
                lastActive: '2021-10-12'
            },
            {
                device: 'Chrome',
                location: 'New York',
                ip: '1.1.1.1',
                lastActive: '2021-10-10'
            },
            {
                device: 'Safari',
                location: 'California',
                ip: '2.2.22',
                lastActive: '2021-10-11'
            },
            {
                device: 'Firefox',
                location: 'Texas',
                ip: '3.3.3.3',
                lastActive: '2021-10-12'
            },
            {
                device: 'Chrome',
                location: 'New York',
                ip: '1.1.1.1',
                lastActive: '2021-10-10'
            },
            {
                device: 'Safari',
                location: 'California',
                ip: '2.2.22',
                lastActive: '2021-10-11'
            },
            {
                device: 'Firefox',
                location: 'Texas',
                ip: '3.3.3.3',
                lastActive: '2021-10-12'
            },
        ],
        applications: [
            {
                name: 'Dashboard',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/dashboard'
            },
            {
                name: 'Settings',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/settings'
            },
            {
                name: 'Profile',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/profile'
            },
            {
                name: 'Dashboard',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/dashboard'
            },
            {
                name: 'Settings',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/settings'
            },
            {
                name: 'Profile',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/profile'
            },
            {
                name: 'Dashboard',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/dashboard'
            },
            {
                name: 'Settings',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/settings'
            },
            {
                name: 'Profile',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/profile'
            },
            {
                name: 'Dashboard',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/dashboard'
            },
            {
                name: 'Settings',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/settings'
            },
            {
                name: 'Profile',
                icon: 'https://avatars.githubusercontent.com/u/65788884?v=4',
                url: '/profile'
            },
        ]
    }

    const activeSessions = account.sessions.slice(0, 4)
    const accounts = account.applications.slice(0, 10)
    return (
        <div className="w-screen flex justify-center flex-col items-center">
            <Card className="w-10/12 justify-center h-4/6 mt-16">
                <CardHeader>
                    <h1 className='text-3xl'>Your Account</h1>
                </CardHeader>
                <CardContent className="ml-10">
                    <div className="flex items-center gap-4 mt-2">
                        <img src={account.picture} className="w-20 h-20 rounded-full" />
                        <div className=''>
                            <h2>{account.name}</h2>
                            <p>{account.email}</p>
                        </div>
                        <div className='ml-36'>
                            <h2>Permissions</h2>
                            <div className='flex flex-row gap-2'>
                                {account.permissions.map((permission, index) => (
                                    <div key={index} className='bg-muted p-2 rounded'>
                                        <p>{permission}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='ml-28 justify-center text-center'>
                            <h2>Status</h2>
                            <div className='bg-muted  p-2 rounded flex items-center'>
                                <Dot color={account.status === 'active' ? 'green' : 'red'} />
                                <p >{account.status}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 text-xl'>
                        <h1>Active Sessions</h1>
                        <div className='flex flex-row'>
                            {activeSessions.map((session, index) => (
                                <Card key={index} className="flex items-center gap-4 mt-10 bg-background mr-10">
                                    <CardContent className="flex flex-col mt-4">
                                        <div className='flex justify-between'>
                                            <h2 className='mr-10'>Browser: </h2>
                                            <h2>{session.device}</h2>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h2 className='mr-10'>Location: </h2>
                                            <h2>{session.location}</h2>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h2 className='mr-10'>IP: </h2>
                                            <h2>{session.ip}</h2>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h2 className='mr-10'>Last Active: </h2>
                                            <h2>{session.lastActive}</h2>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        {account.sessions.length > 3 && <button className='mt-10'>View All</button>}
                        </div>
                    </div>
                </CardContent>
            </Card>








            <Card className="w-10/12 justify-center h-4/6 mt-16 mb-24">
                <CardHeader>
                    <h1 className='text-3xl'>Authorized Applications</h1>
                </CardHeader>
                <CardContent className="ml-10">
                    <div className='mt-8 text-xl'>
                        <div className='flex flex-col'>
                            {accounts.map((account, index) => (
                                <Card key={index} className="flex items-center gap-4 mt-4 bg-background mr-10">
                                    <CardContent className="flex flex-col mt-4">
                                        <div>
                                            <h2>{account.name}</h2>
                                            
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


const Dot: React.FC<{ color: string }> = ({ color }) => {
    return (
      <div
        className={`w-3 h-3 rounded-full mr-2 ${
          color === 'green' ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
    );
  };
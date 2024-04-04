import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import styles from './dashboard.module.css';
import Link from 'next/link';

export default function Page() {
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

  const activeSessions = account.sessions.slice(0, 4);
  const apps = account.applications.slice(0, 6);
  return (
    <div className='flex flex-col items-center justify-center'>
      <Card className='mt-16 h-4/6 w-11/12 justify-center'>
        <CardHeader>
          <h1 className='text-3xl'>Your Account</h1>
        </CardHeader>
        <CardContent className='ml-10'>
          <div className='mt-2 flex flex-wrap items-center gap-4'>
            <img alt='' src={account.picture} className='h-20 w-20 rounded-full' />
            <div className=''>
              <h2>{account.name}</h2>
              <p>{account.email}</p>
            </div>
            <div className='ml-10'>
              <Button variant='white' className='text-xl'>
                Edit
              </Button>
            </div>
            <div className='ml-36'>
              <h2 className='text-xl'>Permissions</h2>
              <div className='flex flex-row gap-2'>
                {account.permissions.map((permission, index) => (
                  <div key={index} className='rounded bg-muted p-2'>
                    <p>{permission}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='ml-28 justify-center text-center'>
              <h2 className='text-xl'>Status</h2>
              <div className='flex  items-center rounded bg-muted p-2'>
                <Dot color={account.status === 'active' ? 'green' : 'red'} />
                <p>{account.status}</p>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-8 text-xl'>
              <h1>Active Sessions</h1>
              <div className='flex flex-row'>
                {activeSessions.map((session, index) => (
                  <Card
                    key={index}
                    className={`z-30 mr-10 mt-10 flex items-center gap-4 bg-background ${styles.sessionCard}`}
                  >
                    <CardContent className='mt-4 flex flex-col'>
                      <div className='z-20 flex justify-between'>
                        <h2 className='mr-10'>Browser: </h2>
                        <h2>{session.device}</h2>
                      </div>
                      <div className='z-20 flex justify-between'>
                        <h2 className='mr-10'>Location: </h2>
                        <h2>{session.location}</h2>
                      </div>
                      <div className='z-20 flex justify-between'>
                        <h2 className='mr-10'>IP: </h2>
                        <h2>{session.ip}</h2>
                      </div>
                      <div className='z-20 flex justify-between'>
                        <h2 className='mr-10'>Last Active: </h2>
                        <h2>{session.lastActive}</h2>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {account.sessions.length > 4 && (
                  <button className='flex flex-col items-center justify-center align-middle'>
                    <div className='mt-10'>View All</div>
                    <ArrowRight size={38} className='transition-all ' />
                  </button>
                )}
              </div>
            </div>

            <div className='mt-8 text-xl'>
              <h1>Autherized apps</h1>
              <div className='flex flex-row'>
                {apps.map((app, index) => (
                  <Card
                    key={index}
                    className={`z-30 mr-10 mt-10 flex items-center gap-4 bg-background ${styles.sessionCard}`}
                  >
                    <CardContent className='mt-4 flex flex-col items-center justify-center align-middle'>
                      <div>
                        <img
                          src={app.icon}
                          alt=''
                          className='h-16 w-16 rounded-full'
                        />
                      </div>
                      <div>
                        <p className='mt-2'>{app.name}</p>
                      </div>
                      <div>
                        <Link href={`/app/${app.id}`}>
                          <Button variant='white' className='mt-4'>
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {account.sessions.length > 3 && (
                  <button className='flex flex-col items-center justify-center align-middle'>
                    <div className='mt-10'>View All</div>
                    <ArrowRight size={38} className='transition-all ' />
                  </button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const Dot: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      className={`mr-2 h-3 w-3 rounded-full ${
        color === 'green' ? 'bg-green-500' : 'bg-red-500'
      }`}
    />
  );
};

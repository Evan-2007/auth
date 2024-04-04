'use client'
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
import { headers } from 'next/headers'


interface Account {
  id: string;
  name: string;
  email: string;
  picture: string;
  status: string;
  permissions: string[];
  sessions: Session[];
  applications: App[];
}
interface Session {
  device: string;
  location: string;
  ip: string;
  lastActive: string;
}
interface App {
  id: string;
  name: string;
  icon: string;
}

export default function Page(): JSX.Element {

  const [accountLoading, setAccountLoading] = useState(true);
  const [account, setAccount ] = useState<Account>({
     id: '',
     name: '',
     email: '',
     picture: '',
     status: '',
     permissions: [],
     sessions: [],
     applications: [],
   })
  useEffect(() => {
    setAccountLoading(true);
    fetch('/api/auth/state')
      .then((res) => res.json())
      .then((data) => {
        setAccount(data.account);
        setAccountLoading(false);
        
      });
  }, []);



  if (accountLoading) {
    return <div>Loading...</div>;
  }

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
                  {account.sessions.slice(0,4).map((session, index) => (
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
                  {account.applications.slice(0,6).map((app, index) => (
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

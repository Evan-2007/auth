'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import InviteTable, { InviteTableLoading } from '@/components/invite/table';

interface Invites {
  invites: invite[];
  message: string;
}

interface invite {
  created_at: string;
  time_created: string;
  code: string;
  accepted: boolean;
  apps: app[];
}

interface app {
  name: string;
  id: string;
}

export default function Page() {
  const [invites, setInvites] = useState<Invites>();
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    fetchInvites();
  }, []);

  async function fetchInvites() {
    const res = await fetch('/api/invite', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setInvites(data.body);
    setStatus(data.status);
    console.log(data);
  }

  if (status === 401) {
    return (
      <div>
        <h1>Unauthorized</h1>
      </div>
    );
  }
  if (status === 403) {
    return (
      <div>
        <h1>Forbidden</h1>
      </div>
    );
  }
  if (status === 200) {
    return (
      <div className='container mx-auto mt-20 flex h-full w-full items-center justify-center px-4 align-middle'>
        <Card className='w-[1200px]'>
          <CardHeader className='text-center'>
            <h1 className='text-2xl font-semibold'>Invite</h1>
          </CardHeader>
          <CardContent>
            <InviteTable invites={invites} />
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div className='container mx-auto mt-20 flex h-full w-full items-center justify-center px-4 align-middle'>
      <Card className='w-[1200px]'>
        <CardHeader className='text-center'>
          <h1 className='text-2xl font-semibold'>Invite</h1>
        </CardHeader>
        <CardContent>
          <InviteTableLoading />
        </CardContent>
      </Card>
    </div>
  );
}

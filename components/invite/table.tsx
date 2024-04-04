import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  invites: Invites | undefined;
}
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

export default function InviteTable(props: Props) {
  if (
    typeof props.invites === 'undefined' ||
    props.invites.invites.length === 0
  ) {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Created At</TableHead>
              <TableHead>Time Created</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Accepted</TableHead>
              <TableHead>Apps</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>No invites found</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }

  if (props.invites === undefined || props.invites.invites.length === 0) {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Created At</TableHead>
              <TableHead>Time Created</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Accepted</TableHead>
              <TableHead>Apps</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>No invites found</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Created At</TableHead>
          <TableHead>Time Created</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>Accepted</TableHead>
          <TableHead>Apps</TableHead>
          <TableHead>Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.invites.invites.map((invite, index) => (
          <TableRow key={index} onClick={() => console.log('clicked')}>
            <TableCell>{invite.created_at}</TableCell>
            <TableCell>{invite.time_created}</TableCell>
            <TableCell>{invite.code}</TableCell>
            <TableCell>{invite.accepted ? 'Yes' : 'No'}</TableCell>
            <TableCell>
              <div className='flex flex-row'>
                {invite.apps.slice(0, 3).map((app, index) => (
                  <p
                    key={index}
                    className='ml-2 rounded bg-muted p-1 text-center'
                  >
                    {app.name}
                  </p>
                ))}
                {invite.apps.length > 3 ? (
                  <Link
                    href={`/dashboard/invite?inviteCode=${invite.code}`}
                    className='ml-2 rounded bg-secondary p-1 text-center'
                  >
                    View All
                  </Link>
                ) : null}
              </div>
            </TableCell>
            <TableCell>
              <Button variant='link' className=' mr-2 text-base'>
                <Link
                  href={`/dashboard/invite?inviteCode=${invite.code}`}
                ></Link>
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total Accepted:</TableCell>
          <TableCell colSpan={2}>
            {props.invites.invites.filter((invite) => invite.accepted).length}
          </TableCell>
          <TableCell colSpan={1}>Total Pending:</TableCell>
          <TableCell>
            {props.invites.invites.filter((invite) => !invite.accepted).length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export function InviteTableLoading() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Created At</TableHead>
          <TableHead>Time Created</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>Accepted</TableHead>
          <TableHead>Apps</TableHead>
          <TableHead>Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 8 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className='h-[33px] w-[90px] rounded' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-[33px] w-[90px] rounded' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-[33px] w-[90px] rounded' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-[33px] w-[90px] rounded' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-[33px] w-[90px] rounded' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-[33px] w-[90px] rounded' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

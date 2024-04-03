import {Navbar} from '@/components/dashboard/header'
import { Menu} from '@/components/dashboard/menu'

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return(
        <section>
            <Navbar />
            <Menu />
                <div className='ml-64'>
                {children}
                </div>
        </section>
    )
}
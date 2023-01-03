import Navigation from '@/components/organisms/Navigation'
import { useAuth } from '@/hooks/auth'
import { Sidebar } from '@/components/organisms/Sidebar.tsx'

type AppLayoutType = {
    header: React.ReactNode
    children: React.ReactNode
}

const AppLayout = ({ header, children }: AppLayoutType) => {
    const { user } = useAuth({ middleware: 'auth' })
    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main className='container'>
                <div className='flex flex-row'>
                    <Sidebar />
                    {children}
                </div>
            </main>
        </div>
    )
}

export default AppLayout

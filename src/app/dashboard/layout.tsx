import DashboardMenu from './_components/Menu'
import UserSession from './_components/UserSession'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="py-2">
        <div className="flex items-baseline justify-between">
          <div className="text-primary text-4xl font-bold">POC</div>
          <DashboardMenu />
        </div>
      </header>
      <main className="grow">{children}</main>
      <footer className="py-2 text-xs">
        <div className="container mx-auto">
          <UserSession />
        </div>
      </footer>
    </>
  )
}

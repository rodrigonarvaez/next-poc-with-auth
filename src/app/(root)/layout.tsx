import NavMenu from './_components/NavMenu'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="py-2">
        <div className="flex items-baseline justify-between">
          <div className="text-primary text-4xl font-bold">POC</div>
          <NavMenu />
        </div>
      </header>
      <main className="grow">{children}</main>
      <footer className="py-2 text-xs">
        <p className="text-center">
          A POC for NextJs with Tailwind, Typescript and Authjs.
        </p>
      </footer>
    </>
  )
}

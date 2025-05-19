import Link from 'next/link'


export function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-neutral-900 py-2 shadow-md mb-24">
        <h1 className="text-4xl font-semibold tracking-tighter">
              <Link 
                key={'/'}
                href={'/'}
              >
                민현기
              </Link>
            </h1>
      </div>
    </>
  )
}

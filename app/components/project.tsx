import Link from 'next/link'

export function Projects() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Projects
      </h1>

      <div className="mt-4 mb-12">
        <Link className="inline-flex items-center gap-2 text-slate-200 hover:bg-neutral-800 hover:border-slate-500 transition-all duration-200 group"
          href={"/archive"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Explore my archive</span>
        </Link>      
      </div>
    </div>
  )
}

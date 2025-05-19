import { ProjectArchives } from 'app/components/archives'
import Link from 'next/link'

export const metadata = {
  title: 'Archive',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        All Projects
      </h1>
      <ProjectArchives />
    </section>
  )
}

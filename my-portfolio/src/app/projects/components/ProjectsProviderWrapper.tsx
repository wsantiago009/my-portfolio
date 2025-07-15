import { ProjectsProvider } from '@/context/ProjectsContext'
import { Projects } from '@/types'

export default function ProjectsProviderWrapper({
    data,
    children,
}: {
    children: React.ReactNode
    data: Projects[]
}) {
    return <ProjectsProvider initialData={data}>{children}</ProjectsProvider>
}

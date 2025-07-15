import { ProjectsProvider } from '@/context/ProjectsContext'
import { getFetchApi } from '@/utils/fetchApis'
import { Projects } from '@/types/index'

import ProjectsProviderWrapper from './components/ProjectsProviderWrapper'

export default async function layout({
    children,
}: {
    children: React.ReactNode
}) {
    const projectsData: Projects[] = await getFetchApi(
        'http://localhost:3000/api/projects',
    )
    return (
        <ProjectsProviderWrapper data={projectsData}>
            {children}
        </ProjectsProviderWrapper>
    )
}

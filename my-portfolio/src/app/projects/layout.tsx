import { getFetchApi } from '@/utils/fetchApis'
import { Projects } from '@/types/index'

import PageWrapper from '@/components/layout/PageWrapper'

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
            <PageWrapper>{children}</PageWrapper>
        </ProjectsProviderWrapper>
    )
}

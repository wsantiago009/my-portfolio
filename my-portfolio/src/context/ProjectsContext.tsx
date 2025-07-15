'use client'

import { createContext, useContext, useState } from 'react'

import { Projects } from '@/types/index'

type ProjectContext = {
    data: Projects[]
    setData: (data: Projects[]) => void
}

const ProjectsContext = createContext<ProjectContext | null>(null)

export const ProjectsProvider = ({
    children,
    initialData,
}: {
    children: React.ReactNode
    initialData: Projects[]
}) => {
    const [data, setData] = useState<Projects[]>(initialData)

    return (
        <ProjectsContext.Provider value={{ data, setData }}>
            {children}
        </ProjectsContext.Provider>
    )
}
export const useProjectsContext = () => {
    const context = useContext(ProjectsContext)
    if (!context) {
        throw new Error(
            'useProjectsContext must be used within ProjectsProvider',
        )
    }
    return context
}

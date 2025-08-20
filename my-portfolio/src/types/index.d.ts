import { dynamicIconImports } from 'lucide-react/dynamic'
type IconName = keyof typeof dynamicIconImports

export type Contact = {
    contact_data: string
    icon: string
}

export type Experience = {
    company: string
    description: string
    tenure: string
    sub_company: string
    role: string
    link: string
    responsibilities: string[]
}

export type WorkHighlight = {
    project: string
    thumbnail: string
    highlight: string[]
}

type ProjectFeatures = {
    icon: IconName
    feature_title: string
}

export type Projects = {
    name: string
    slug: string
    description: string
    features: ProjectFeatures[]
    techstack: string[]
    tech_position: string
    thumbnail: string
}

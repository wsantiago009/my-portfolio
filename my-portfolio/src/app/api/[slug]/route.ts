import { NextRequest, NextResponse } from 'next/server'

import contact from '@/data/contact.json'
import experience from '@/data/experience.json'
import skills from '@/data/skills.json'
import wcExperience from '@/data/wc-experience.json'
import atmosExperience from '@/data/atmos-experience.json'
import libelleExperience from '@/data/libelle-experience.json'
import projects from '@/data/projects.json'

// export async function GET(
//     request: NextRequest,
//     { params }: { params: Promise<{ slug: string }> },
// ) {
//     try {
//         const { slug } = await params
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> },
) {
    try {
        const resolvedParams = await params
        const { slug } = resolvedParams

        if (slug === 'contact') {
            return NextResponse.json(contact)
        }

        if (slug === 'experience') {
            return NextResponse.json(experience)
        }

        if (slug === 'skills') {
            return NextResponse.json(skills)
        }

        if (slug === 'whitecloak') {
            return NextResponse.json(wcExperience)
        }

        if (slug === 'atmos') {
            return NextResponse.json(atmosExperience)
        }

        if (slug === 'libelle') {
            return NextResponse.json(libelleExperience)
        }

        if (slug === 'projects') {
            return NextResponse.json(projects)
        }

        return NextResponse.json({ message: 'Error' })
    } catch {
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 },
        )
    }
}

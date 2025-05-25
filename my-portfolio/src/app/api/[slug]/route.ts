import { NextRequest, NextResponse } from 'next/server'

import contact from '@/data/contact.json'
import experience from '@/data/experience.json'
import skills from '@/data/skills.json'
import wcExperience from '@/data/wc-experience.json'
import atmosExperience from '@/data/atmos-experience.json'
import libelleExperience from '@/data/libelle-experience.json'

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } },
) {
    try {
        const { slug } = await params

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

        return NextResponse.json({ mesage: 'Error' })
    } catch {}
}

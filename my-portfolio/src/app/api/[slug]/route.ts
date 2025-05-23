import { NextRequest, NextResponse } from 'next/server'

import contact from '@/data/contact.json'
import experience from '@/data/experience.json'
import skills from '@/data/skills.json'

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

        return NextResponse.json({ mesage: 'Error' })
    } catch {}
}

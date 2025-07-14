'use client'

import { useRouter } from 'next/navigation'

import { ArrowLeft } from 'lucide-react'

const BackButton = ({ url }: { url: string }) => {
    const router = useRouter()
    return (
        <ArrowLeft
            className="cursor-pointer"
            onClick={() => {
                router.push(url)
            }}
        />
    )
}
export default BackButton

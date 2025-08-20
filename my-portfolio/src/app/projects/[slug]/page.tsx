'use client'
import React from 'react'
import Image from 'next/image'
import { DynamicIcon } from 'lucide-react/dynamic'

import BackButton from '@/components/BackButton'

import { useProjectsContext } from '@/context/ProjectsContext'

export default function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { data } = useProjectsContext()
    const { slug } = React.use(params)
    const selectedProject = data?.find((project) =>
        [project.name.toLowerCase(), project.slug].includes(slug),
    )

    return (
        <div className="flex flex-col gap-7 [&_h4]:text-lg [&_h4]:font-bold [&_h4]:mb-2">
            <BackButton url="./" />
            <div>
                {selectedProject?.thumbnail && (
                    <Image
                        className="rounded-md"
                        src={selectedProject?.thumbnail}
                        alt="profile"
                        width={800}
                        height={400}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                )}
            </div>
            <div>
                <p>{selectedProject?.description}</p>
            </div>
            <div>
                <h4>Key Features</h4>
                <ul>
                    {selectedProject?.features.map((item, i) => (
                        <li key={i} className="flex my-4">
                            <DynamicIcon name={item.icon} className="mr-3" />
                            {item.feature_title}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Technologies Used</h4>
                <ul className="grid grid-cols-12 [&>*]:px-5 [&>*]:py-2 [&>*]:bg-gray-300 [&>*]:my-2 [&>*]:rounded-xl [&>*]:text-gray-700 [&>*]:mr-5">
                    {selectedProject?.techstack.map((item, i) => (
                        <li
                            key={i}
                            className="md:col-span-2 col-span-12 text-center content-center"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>My Role</h4>
                <p>{selectedProject?.tech_position}</p>
            </div>
        </div>
    )
}

'use client'
import React from 'react'
import Image from 'next/image'

import { useProjectsContext } from '@/context/ProjectsContext'

export default function page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { data } = useProjectsContext()
    const { slug } = React.use(params)
    const selectedProject = data?.find(
        (project) => project.name.toLowerCase() === slug,
    )

    return (
        <div className="flex flex-col gap-7 [&_h4]:text-lg [&_h4]:font-bold [&_h4]:mb-2">
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
                        <li key={i}>{item.feature_title}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Technologies Used</h4>
                <ul className="inline-flex [&>*]:px-5 [&>*]:py-2 [&>*]:bg-gray-300 [&>*]:my-2 [&>*]:rounded-xl [&>*]:text-gray-700 space-x-5">
                    {selectedProject?.techstack.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>My Role</h4>
                <p>
                    As a Frontend Developer, I was responsible for implementing
                    the user interface, integrating with backend services, and
                    ensuring a responsive and user-friendly design. I also
                    contributed to code reviews and collaborated with the design
                    team to refine the user experience.
                </p>
            </div>
        </div>
    )
}

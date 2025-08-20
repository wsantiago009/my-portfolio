'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useProjectsContext } from '@/context/ProjectsContext'

export default function Page() {
    const { data } = useProjectsContext()

    return (
        <>
            <div className="mb-8">
                <h3>Projects</h3>
                <p>
                    A selection of my work, showcasing my skills and experience
                    in frontend development.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-5">
                {data.map((item, i) => {
                    const projectName = item?.name
                    const slugUrl = item?.slug || projectName

                    return (
                        <div className="col-span-4" key={i}>
                            <Link href={`projects/${slugUrl?.toLowerCase()}`}>
                                <div className="mb-4">
                                    <Image
                                        className="rounded-md"
                                        src={item?.thumbnail}
                                        alt="profile"
                                        width={800}
                                        height={400}
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <div>
                                    <h5 className="text-xl font-semibold mb-1">
                                        {projectName}
                                    </h5>
                                    <p>{item?.description}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

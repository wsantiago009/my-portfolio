import Link from 'next/link'
import Image from 'next/image'

import { getFetchApi } from '@/utils/fetchApis'

import PageWrapper from '@/components/layout/PageWrapper'

import { Projects } from '@/types'

export default async function page() {
    const projectsData: Projects[] = await getFetchApi(
        'http://localhost:3000/api/projects',
    )

    return (
        <PageWrapper>
            <div className="mb-8">
                <h3 className="text-3xl font-semibold text-gray-700 mb-2">
                    Projects
                </h3>
                <p>
                    A selection of my work, showcasing my skills and experience
                    in frontend development.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-5">
                {projectsData.map((item, i) => {
                    const projectName = item?.name

                    return (
                        <div className="col-span-4" key={i}>
                            <Link
                                href={`projects/${projectName?.toLowerCase()}`}
                            >
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
        </PageWrapper>
    )
}

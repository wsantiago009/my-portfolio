import { BriefcaseBusiness } from 'lucide-react'

import { getFetchApi } from '@/utils/fetchApis'
import { Experience } from '@/types'

import PageWrapper from '@/components/layout/PageWrapper'

export default async function page() {
    const experienceData: Experience[] = await getFetchApi(
        'http://localhost:3000/api/experience',
    )
    return (
        <PageWrapper>
            <div className="mb-8">
                <h3>Experience</h3>
            </div>
            <div className="flex flex-col gap-7">
                <div>
                    <ul className="relative border-l border-gray-300 ml-4 space-y-10 [&:last-child]:mb-5">
                        {experienceData?.map((item, i) => (
                            <li className="ml-6" key={i}>
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center bg-gray-50 px-1">
                                    <BriefcaseBusiness size={28} />
                                    {/* <BriefcaseBusiness
                                size={20}
                                className="absolute -left-3 flex h-6 w-6 items-center justify-center bg-gray-50 px-4"
                            /> */}
                                </div>
                                <div>
                                    <h5 className="text-gray-700 font-bold">
                                        {item.role} at {item.company}
                                    </h5>
                                    <p className="text-gray-400">
                                        {item.tenure}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {experienceData?.map((item, i) => (
                    <div key={i} className="mb-5">
                        <div className="mb-2">
                            <h4 className="text-xl font-bold text-gray-700">
                                {item.company}
                            </h4>
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </PageWrapper>
    )
}

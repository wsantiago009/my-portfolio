import Link from 'next/link'

import { Experience } from '@/types'

const ExperienceList = ({ content }: { content: Experience }) => {
    return (
        <div className="mb-5">
            <Link className="text-gray-700 hover:underline" href={`work/${content.link}`}>
                {content.company} | {content.tenure}
            </Link>
            <div className="text-sm">
                <h6 className="text-gray-700">{content.sub_company}</h6>
                <h6 className="mb-2">{content.role}</h6>
                <ul className="pl-5">
                    {content.responsibilities?.map((item, j) => (
                        <li key={j} className="list-disc mb-1">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ExperienceList

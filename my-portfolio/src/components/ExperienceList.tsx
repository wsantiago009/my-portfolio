import { Experience } from '@/types'

const ExperienceList = ({ content }: { content: Experience }) => {
    return (
        <div className="mb-5">
            <h5 className="text-gray-700">
                {content.company} | {content.tenure}
            </h5>
            <div className="text-sm">
                <h6 className="text-gray-700">{content.sub_company}</h6>
                <h6 className='mb-2'>{content.role}</h6>
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

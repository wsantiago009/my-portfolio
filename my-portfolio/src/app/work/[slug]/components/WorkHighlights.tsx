import { WorkHighlight } from '@/types'

import FadeInWrapper from '@/components/FadeInWrapper'

const WorkHighlights = ({ data }: { data: WorkHighlight[] }) => {
    return (
        <div className="px-14 py-10">
            {data?.map((item, i) => (
                <FadeInWrapper
                    key={i}
                    className="mb-12"
                >
                    <h4 className="text-3xl mb-4">{item.project}</h4>
                    <ul className='pl-4'>
                        {item.highlight.map((item, j) => (
                            <li key={j} className="mb-3">
                                - {item}
                            </li>
                        ))}
                    </ul>
                </FadeInWrapper>
            ))}
        </div>
    )
}
export default WorkHighlights

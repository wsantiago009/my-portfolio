import Image from 'next/image'
import { WorkHighlight } from '@/types'

import FadeInWrapper from '@/components/Resume/FadeInWrapper'

const WorkHighlights = ({ data }: { data: WorkHighlight[] }) => {
    return (
        <div className="px-14 py-10">
            {data?.map((item, i) => (
                <FadeInWrapper key={i} className="mb-12">
                    <h4 className="text-3xl mb-4">{item.project}</h4>
                    {item.thumbnail && (
                        <div className="mb-4">
                            <Image
                                alt={item.project}
                                src={item.thumbnail}
                                width={800}
                                height={600} 
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    )}
                    <ul className="pl-4">
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

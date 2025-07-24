import BackButton from '@/components/BackButton'

import PaperCanvass from '@/components/Resume/PaperCanvass'
import WorkHighlights from './components/WorkHighlights'
import { getFetchApi } from '@/utils/fetchApis'

const WorkPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const workHighlight = await getFetchApi(`/api/${slug}`)

    return (
        <PaperCanvass>
            <div className="px-5">
                <BackButton url="../" />
            </div>
            <WorkHighlights data={workHighlight} />
        </PaperCanvass>
    )
}
export default WorkPage

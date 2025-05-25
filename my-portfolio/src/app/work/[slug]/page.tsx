import PaperCanvass from '@/components/PaperCanvass'
import BackButton from '@/components/BackButton'
import WorkHighlights from './components/WorkHighlights'
import { getFetchApi } from '@/utils/fetchApis'

const WorkPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params
    const workHighlight = await getFetchApi(`http://localhost:3000/api/${slug}`)

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

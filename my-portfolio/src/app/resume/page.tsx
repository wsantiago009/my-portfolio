import { getFetchApi } from '@/utils/fetchApis'

import PaperCanvass from '@/components/Resume/PaperCanvass'
import ContactElem from '@/components/Resume/ContactList'
import ExperienceList from '@/components/Resume/ExperienceList'
import SkillList from '@/components/Resume/SkillList'

import { Contact, Experience } from '@/types'

export default async function Home() {
    const contactData: Contact[] = await getFetchApi(
        'http://localhost:3000/api/contact',
    )
    const experienceData: Experience[] = await getFetchApi(
        'http://localhost:3000/api/experience',
    )
    const skillsData: String[] = await getFetchApi(
        'http://localhost:3000/api/skills',
    )

    return (
        <PaperCanvass>
            <div className="p-10 md:p-16 md:pb-10">
                <h3 className="text-3xl mb-2 text-gray-700">WALTER SANTIAGO</h3>
                <p className="text-sm font-thin mb-4">
                    SENIOR FRONT-END DEVELOPER
                </p>
                <p className="text-sm">
                    Software developer with over 10 years of experience building
                    web apps in React JS for millions of users, catering to both
                    business and individual needs. Proven in agile environments,
                    delivering high-quality, scalable solutions through strong
                    collaboration.
                </p>
            </div>
            <div className="bg-gray-200 px-10 md:px-16 sm:flex sm:justify-between sm:items-center">
                {contactData &&
                    contactData?.map((item: Contact, i) => (
                        <ContactElem key={i} content={item} />
                    ))}
            </div>
            <div className="grid grid-cols-12 gap-4 px-10 md:px-16 py-10">
                <div className="col-span-12 md:col-span-4 md:col-start-9 md:row-start-1 md:pl-7 pb-5 mb-5 md:border-b-0 border-b">
                    {skillsData && (
                        <>
                            <h4 className="text-2xl text-gray-700 mb-4">
                                SKILLS
                            </h4>
                            <SkillList content={skillsData} />
                        </>
                    )}
                </div>
                <div className="col-span-12 md:col-span-8 md:col-start-1 md:row-start-1 md:pr-8 md:border-r">
                    <h4 className="text-2xl text-gray-700 mb-4">EXPERIENCE</h4>
                    {experienceData &&
                        experienceData?.map((item: Experience, i) => (
                            <ExperienceList key={i} content={item} />
                        ))}
                </div>
            </div>
        </PaperCanvass>
    )
}

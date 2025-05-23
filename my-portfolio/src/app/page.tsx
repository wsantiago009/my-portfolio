import useFetch from '@/hooks/useFetch'

import ContactElem from '@/components/Contact'

type Contact = {
    address: string
    mobile: string
    email: string
}

export default async function Home() {
    const contactData: Contact = await useFetch(
        'http://localhost:3000/api/contact',
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-100 flex py-4 justify-center tracking-wide">
            <div className="bg-white container max-w-3xl shadow-lg text-gray-500">
                <div className="p-16 pb-10">
                    <h3 className="text-3xl mb-2 text-gray-700">
                        WALTER SANTIAGO
                    </h3>
                    <p className="text-sm font-thin mb-4">
                        SENIOR FRONT-END DEVELOPER
                    </p>
                    <p className="text-sm">
                        Software developer with over 10 years of experience
                        building web apps in React JS for millions of users,
                        catering to both business and individual needs. Proven
                        in agile environments, delivering high-quality, scalable
                        solutions through strong collaboration.
                    </p>
                </div>
                <div className="bg-gray-200 py-3 px-16 flex justify-between items-center">
                    {contactData && (
                        <>
                            <ContactElem content={contactData.address} />
                            <ContactElem content={contactData.mobile} />
                            <ContactElem content={contactData.email} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

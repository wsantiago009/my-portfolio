import Image from 'next/image'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-100 flex py-4 justify-center tracking-wide">
            <div className="bg-white container max-w-3xl shadow-lg text-gray-500">
                <div className="p-16">
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
            </div>
        </div>
    )
}

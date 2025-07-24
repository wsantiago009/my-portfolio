import Image from 'next/image'
import Link from 'next/link'

import MyImage from '../../public/images/homepage-image.svg'

import PageWrapper from '@/components/layout/PageWrapper'

export default async function Home() {
    return (
        <PageWrapper>
            <div className="flex justify-center gap-5">
                <div className="w-full max-w-md">
                    <Image
                        src={MyImage}
                        alt="profile"
                        width={800}
                        height={400}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className="flex flex-col justify-between py-3">
                    <div className="w-full">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Frontend Developer
                        </h2>
                        <p>
                            I'm a frontend developer specializing in React,
                            JavaScript, and building user-friendly interfaces.
                            Explore my projects to see my work.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        // className="p-3 bg-blue-200 rounded-lg text-gray-700 font-semibold"
                        className="bg-blue-600 text-white w-full p-2 rounded-lg text-center"
                    >
                        {/* <button className="bg-blue-600 text-white w-full p-2 rounded-lg"> */}
                        View Projects
                        {/* </button> */}
                    </Link>
                </div>
            </div>
        </PageWrapper>
    )
}

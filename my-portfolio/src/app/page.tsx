import Image from 'next/image'
import Link from 'next/link'

import MyImage from '../../public/images/homepage-image.svg'

import PageWrapper from '@/components/layout/PageWrapper'

export default async function Home() {
    return (
        <PageWrapper>
            <div className="grid grid-cols-12 gap-5 gap-5">
                <div className="w-full md:max-w-md md:col-span-6 col-span-12">
                    <Image
                        className="bg-cover"
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
                <div className="md:col-span-6 col-span-12">
                    <div className="h-full flex flex-col justify-between md:p-0 py-3">
                        <div className="w-full">
                            <h2 className="text-5xl font-bold text-gray-900 mb-4">
                                Frontend Developer
                            </h2>
                            <p className="mb-9">
                                I'm a frontend developer specializing in React,
                                JavaScript, and building user-friendly
                                interfaces. Explore my projects to see my work.
                            </p>
                        </div>

                        <Link
                            href="/projects"
                            className="bg-blue-600 text-white w-full p-2 rounded-lg text-center"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

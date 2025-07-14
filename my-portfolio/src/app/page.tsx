import Image from 'next/image'

export default async function Home() {
    return (
        <div className="flex justify-center max-w-screen-lg mx-auto gap-5">
            <div className="w-full max-w-md">
                <Image
                    src="https://placehold.co/800x400/png"
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
                <button className="bg-blue-600 text-white w-full p-2 rounded-lg">
                    View Projects
                </button>
            </div>
        </div>
    )
}

import Link from 'next/link'

const Header = () => {
    return (
        <header className="bg-white py-5 shadow-sm">
            <div className="max-w-screen-xl mx-auto flex justify-between">
                <h4 className="font-bold text-lg">
                    <Link href="/">My Portfolio</Link>
                </h4>
                <nav className="space-x-7">
                    <Link href="/projects">Project</Link>
                    <Link href="/experience">Experience</Link>
                    <Link
                        href="/resume"
                        className="p-3 bg-blue-200 rounded-lg text-gray-700 font-semibold"
                    >
                        Resume
                    </Link>
                </nav>
            </div>
        </header>
    )
}
export default Header

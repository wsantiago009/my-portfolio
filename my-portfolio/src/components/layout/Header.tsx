'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = [
        { href: '/projects', label: 'Projects' },
        { href: '/experience', label: 'Experience' },
        { href: '/resume', label: 'Resume' },
    ]

    return (
        <>
            <header className="bg-white px-5 p-3 md:p-5 shadow-sm ">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex items-center justify-between">
                        <h4 className="font-bold text-lg">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                My Portfolio
                            </Link>
                        </h4>
                        <nav className="hidden items-center md:flex space-x-7 ">
                            {navItems.map((item, i) => {
                                const resumeClassname =
                                    item.label === 'Resume'
                                        ? 'p-3 bg-blue-200 rounded-lg text-gray-700 font-semibold'
                                        : ''

                                return (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className={resumeClassname}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </nav>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-150 mb-4 shadow-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(!isOpen)}
                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Header

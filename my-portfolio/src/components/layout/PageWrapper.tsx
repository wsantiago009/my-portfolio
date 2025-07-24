const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-screen-lg mx-auto py-10 [&_h3]:text-3xl [&_h3]:font-semibold [&_h3]:text-gray-700 [&_h3]:mb-2">
            {children}
        </div>
    )
}
export default PageWrapper

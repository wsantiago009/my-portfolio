const PaperCanvass = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-100 flex p-4 justify-center tracking-wide">
            <div className="bg-white container max-w-3xl shadow-lg text-gray-500 py-4">
                {children}
            </div>
        </div>
    )
}
export default PaperCanvass

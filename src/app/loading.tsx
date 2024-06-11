export default function Loading() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
        </div>
    )
}
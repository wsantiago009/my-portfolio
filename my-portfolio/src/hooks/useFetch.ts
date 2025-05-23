const fetchApi = async (url: string) => {
    try {
        const response = await fetch(url)
        const result = await response.json()

        return result
    } catch (e) {
        console.error(e)
    }
}

const useFetch = async ( url: string ) => {
    const fetchResult = await fetchApi(url)

    return fetchResult
}
export default useFetch

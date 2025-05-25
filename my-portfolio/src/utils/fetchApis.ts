export const getFetchApi = async (url: string) => {
    try {
        const response = await fetch(url)
        const result = await response.json()

        return result
    } catch (e) {
        console.error(e)
    }
}
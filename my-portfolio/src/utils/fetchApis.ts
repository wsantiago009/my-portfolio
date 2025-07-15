export const getFetchApi = async (url: string) => {
    try {
        const response = await fetch(url, {
            next: { revalidate: 3600 },
        })
        const result = await response.json()

        return result
    } catch (e) {
        console.error(e)
    }
}

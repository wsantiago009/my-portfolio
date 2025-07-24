import { baseUrl } from '@/lib/config'

export const getFetchApi = async (url: string) => {
    try {
        const response = await fetch(`${baseUrl}${url}`, {
            next: { revalidate: 3600 },
        })
        const result = await response.json()

        return result
    } catch (e) {
        console.error(e)
    }
}

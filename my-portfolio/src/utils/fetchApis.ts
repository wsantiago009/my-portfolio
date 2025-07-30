import { baseUrl } from '@/lib/config'

export const getFetchApi = async (url: string) => {
    try {
        const response = await fetch(`${baseUrl}${url}`, {
            next: { revalidate: 3600 },
        })

        if (response.ok) {
            return await response.json()
        }

        return []
    } catch (e) {
        console.error(e)
    }
}

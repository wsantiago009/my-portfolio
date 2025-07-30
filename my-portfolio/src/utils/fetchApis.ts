import { baseUrl } from '@/lib/config'

export const getFetchApi = async (url: string) => {
    try {
        const response = await fetch(`${baseUrl}${url}`, {
            next: { revalidate: 3600 },
        })
console.log(baseUrl)
        if (response.ok) {
            const data = await response.json()
            return Array.isArray(data) ? data : []
        }

        return []
    } catch (e) {
        console.error(e)
        return []
    }
}

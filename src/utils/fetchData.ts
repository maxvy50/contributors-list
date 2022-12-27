export async function fetchData<T>(url: string, reqInit: RequestInit): Promise<T> {
    return fetch(url, reqInit).then(response => {
        if (response.status !== 304 && !response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as T
    })
}
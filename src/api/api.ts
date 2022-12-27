import { fetchData } from "../utils/fetchData"


export interface Meta {
    currentPage: number,
    perPage: number,
    totalPages: number
}

export interface Item {
    id: number | 'new',
    username: string,
    email: string,
    address: string
}

export interface ItemsBatchResponse {
    meta: Meta,
    items: Item[]
}

interface HasToString {
    toString: () => string
}

export class API {
    private static url = 'https://new-backend.unistory.app/api/data';
    private static reqInit = {
        method: 'GET',
        headers: new Headers({
            accept: 'application/json'
        })
    }

    public static async get<S extends HasToString, T>(params: S): Promise<T> {
        return await fetchData<T>(`${this.url}${params.toString()}`, this.reqInit)
    }
}


export class ItemsBatchRequest implements HasToString {
    page: number;
    perPage: number;
    constructor(page: number, perPage: number) {
        this.page = page
        this.perPage = perPage
    }
    toString = (): string =>
        `?page=${this.page}&perPage=${this.perPage}`
}

export class ItemByIdRequest implements HasToString {
    id: number;
    constructor (id: number) {
        this.id = id
    };
    toString = (): string =>
        `/id/${this.id}`
}

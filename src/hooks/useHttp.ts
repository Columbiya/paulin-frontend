import { storeAnnotation } from "mobx/dist/internal"
import { useEffect, useState } from "react"
import { myAxios } from "../http/axios"
import { News } from "../schemas/News"
import { Partner } from "../schemas/Partner"
import { newsStore } from "../store/newsStore"
import { partnersStore } from "../store/partnersStore"

type schemas = News | Partner
type stores = typeof newsStore | typeof partnersStore

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT'
}

interface IUseHttp {
    link: string
    method: Methods,
    useAuth: boolean
    store: stores
}


export function useHttp<T extends schemas>({ link, method, useAuth, store }: IUseHttp): [T[] | null, boolean, Error | undefined] {
    const [items, setItems] = useState<T[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (store.items.length) {
            setItems(store.items as T[])
        }

        const makeHttp = async () => {
            try {
                setLoading(true)
                const data = await myAxios({method, url: link}).then(response => response.data)
                store.items = data
                setItems(data)
            } catch(e) {
                if (e instanceof Error) {
                    console.log(e)
                    setError(e)
                }
            } finally {
                setLoading(false)
            }
        }

        makeHttp()
    }, [])

    return [items, loading, error]

}
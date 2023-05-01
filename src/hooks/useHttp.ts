import { AxiosRequestHeaders } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { authAxios } from 'http/authAxios'
import { myAxios } from 'http/axios'
import { News } from 'schemas/News'
import { Partner } from 'schemas/Partner'
import { authStore } from 'store/authStore'
import { newsStore } from 'store/newsStore'
import { partnersStore } from 'store/partnersStore'

type schemas = News[] | Partner[] | News | Partner | boolean
type stores = typeof newsStore | typeof partnersStore | typeof authStore

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

interface IUseHttp {
  link: string
  method: Methods
  useAuth: boolean
  store: stores | null
  body?: object
  headers?: AxiosRequestHeaders
  isLazy?: boolean
  periodic?: boolean
  dependsOn?: any
  delay?: number
}

type HttpReturnType<T> = [
  T | null,
  boolean,
  Error | undefined,
  ((body: any, id?: number) => Promise<void>) | undefined
]

export function useHttp<T extends schemas>({
  link,
  method,
  store,
  body,
  headers,
  isLazy,
  delay,
  periodic,
  dependsOn,
}: IUseHttp): HttpReturnType<T> {
  const [items, setItems] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error>()
  const [dependsOnState, setDependsOnState] = useState(dependsOn)

  const create = async (body: any, id?: number) => {
    try {
      setLoading(true)
      const data = await authAxios({
        method,
        url: link + `/${id ? id : ''}`,
        headers,
        data: body,
      }).then((response) => response.data)
      setItems(data)
    } catch (e: any) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  const makeHttp = useCallback(async () => {
    try {
      if (!store) return

      setLoading(true)

      const data = await myAxios({ method, url: link, headers }).then(
        (response) => response.data
      )

      if (Array.isArray(data)) {
        store.items = data
      } else {
        store.item = data
      }
      setItems(data)
    } catch (e) {
      if (e instanceof Error) {
        setError(e)
      }
    } finally {
      setLoading(false)
    }
  }, [store, method, link, headers])

  useEffect(() => {
    if (dependsOn === dependsOnState) return

    makeHttp()
    setDependsOnState(dependsOn)
  }, [dependsOn])

  useEffect(() => {
    if (dependsOn) setDependsOnState(dependsOn)

    if (isLazy || !store) {
      setLoading(false)
      return
    }

    if (Array.isArray(store.items) && store.items.length) {
      setItems(store.items as T)
    }

    makeHttp()

    if (periodic) {
      setTimeout(makeHttp, delay)
    }
  }, [])

  const lazyLoadFunction = isLazy ? create : undefined

  return [items, loading, error, lazyLoadFunction]
}

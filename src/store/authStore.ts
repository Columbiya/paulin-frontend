import { makeAutoObservable } from "mobx";
import { setAuthToken } from "../helpers/setAuthToken";
import { myAxios } from "../http/axios";

class AuthStore { 
    private _isAuth = true

    constructor() {
        makeAutoObservable(this)
    }

    get item() {
        return this._isAuth
    }

    set item(value: boolean) {
        this._isAuth = value
    }

    get items() {
        return this._isAuth
    }

    set items(value: boolean) {
        this._isAuth = value
    }

    async login(username: string, password: string) {
        try {
            const token = await myAxios.post<string>('/auth', {username, password}).then(response => response.data)
            setAuthToken(token)
            this._isAuth = true
        } catch(e) {
            this._isAuth = false
        }
    }
}

export const authStore = new AuthStore()
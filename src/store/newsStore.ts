import { makeAutoObservable } from "mobx";
import { myAxios } from "../http/axios";
import { News } from "../schemas/News";

class NewsStore { 
    private _news: News[] = []

    constructor() {
        makeAutoObservable(this)
    }

    get items() {
        return this._news
    }

    set items(value: News[]) {
        this._news = value
    }
}

export const newsStore = new NewsStore()
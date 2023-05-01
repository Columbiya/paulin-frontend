import { makeAutoObservable } from "mobx";
import { News } from "schemas/News";

class NewsStore { 
    private _news: News[] = []
    private _singleNew: News = {} as News;

    constructor() {
        makeAutoObservable(this)
    }

    get items() {
        return this._news
    }

    set items(value: News[]) {
        this._news = value
    }

    get item() {
        return this._singleNew
    }

    set item(value: News) {
        this._singleNew = value
    }
}

export const newsStore = new NewsStore()
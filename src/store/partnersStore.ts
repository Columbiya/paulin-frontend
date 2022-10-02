import { makeAutoObservable } from "mobx";
import { Partner } from "../schemas/Partner";

class PartnersStore { 
    private _partners: Partner[] = []

    constructor() {
        makeAutoObservable(this)
    }

    get items() {
        return this._partners
    }

    set items(value: Partner[]) {
        this._partners = value
    }
}

export const partnersStore = new PartnersStore()
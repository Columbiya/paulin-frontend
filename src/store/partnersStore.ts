import { makeAutoObservable } from "mobx";
import { Partner } from "schemas/Partner";

class PartnersStore { 
    private _partners: Partner[] = []
    private _singlePartner: Partner = {} as Partner

    constructor() {
        makeAutoObservable(this)
    }

    get items() {
        return this._partners
    }

    set items(value: Partner[]) {
        this._partners = value
    }

    get item() {
        return this._singlePartner
    }

    set item(value: Partner) {
        this._singlePartner = value
    }
}

export const partnersStore = new PartnersStore()
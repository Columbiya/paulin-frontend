import { servicesTypes } from "components/Input/Input"

export interface Request {
    name: string
    whatYouDo: string
    phone: string
    companyName: string
    typeService: servicesTypes
    email: string
}
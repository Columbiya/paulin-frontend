import { Hiders } from "components/Popup/CreateNews/CreateNews"
import { Chapter } from "./Chapter"

export interface News {
    id: number
    title: string
    text: string
    image: string
    author: string
    hider: Hiders
    createdAt: string
    updatedAt: string
    chapter: Chapter[]
}
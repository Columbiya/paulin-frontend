import { Chapter } from "./Chapter"

export interface News {
    id: number
    title: string
    text: string
    image: string
    author: string
    createdAt: string
    updatedAt: string
    chapter: Chapter[]
}
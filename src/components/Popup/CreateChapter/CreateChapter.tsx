import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Methods, useHttp } from '../../../hooks/useHttp'
import { News } from '../../../schemas/News'
import { newsStore } from '../../../store/newsStore'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'

export interface CreateChapterProps {
    onHide: () => void
    setSuccess: (value: string) => void
    setError: (val: string) => void
}

interface CreateChapterValues {
    name: string
    text: string
    newId: number
}

export const CreateChapter: React.FC<CreateChapterProps> = ({ onHide, setSuccess }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<CreateChapterValues>()
    const [isSafeToReset, setSafeToReset] = useState(false)
    const [item, loading, error, lazyLoadFunc] = useHttp(
        {link: '/chapters', method: Methods.POST, useAuth: true, isLazy: true, store: null}
    )
    const [news, newsLoading, newsError] = useHttp<News[]>(
        {link: '/news', method: Methods.GET, store: newsStore, useAuth: false}
    )

    const onSubmit: SubmitHandler<CreateChapterValues> = async (data) => {
        const body = data

        if (lazyLoadFunc) {
            await lazyLoadFunc({text: data.text, name: data.name}, data.newId)
            setSafeToReset(true)
            onHide()
            setSuccess("Chapter создана успешно")
        }
    }

    useEffect(() => {
        if (!isSafeToReset) return

        reset() 
        setSafeToReset(false)
    }, [isSafeToReset])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="popup-title">Create Chapter for news</h3>

            <Input 
                fieldName='text'
                name="Text"
                register={register}
                isRequired
                error={errors.text}
                type="textarea"
            />

            <Input 
                fieldName='name'
                name="Name"
                register={register}
                isRequired
                error={errors.name}
            />

            <Input 
                fieldName='newId'
                name="News available"
                register={register}
                placeholder="Выберите News, в котором будет Chapter"
                isDropdown
                setValue={setValue}
                options={news ? news: undefined}
            />

            <Button style={{marginTop: 50, width: "100%"}}>Add Chapter</Button>
        </form>
    )
} 
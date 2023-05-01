import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Methods, useHttp } from 'hooks/useHttp'
import { News } from 'schemas/News'
import { newsStore } from 'store/newsStore'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'

export interface CreateChapterProps {
    onHide: () => void
    setSuccess: (value: string) => void
}

interface CreateChapterValues {
    newId: number
}

export const DeleteNews: React.FC<CreateChapterProps> = ({ onHide, setSuccess }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<CreateChapterValues>()
    const [isSafeToReset, setSafeToReset] = useState(false)
    const [item, loading, error, lazyLoadFunc] = useHttp(
        {link: '/news', method: Methods.DELETE, useAuth: true, isLazy: true, store: null}
    )
    const [news, newsLoading, newsError] = useHttp<News[]>(
        {link: '/news', method: Methods.GET, store: newsStore, useAuth: false}
    )

    const onSubmit: SubmitHandler<CreateChapterValues> = async (data) => {
        if (lazyLoadFunc) {
            await lazyLoadFunc(null, data.newId)
            setSafeToReset(true)
            onHide()
            setSuccess("News удален успешно")
        }
    }

    useEffect(() => {
        if (!isSafeToReset) return

        reset() 
        setSafeToReset(false)
    }, [isSafeToReset])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="popup-title">Delete News</h3>

            <Input 
                fieldName='newId'
                name="News available"
                register={register}
                placeholder="Выберите News, который будет удален"
                isDropdown
                setValue={setValue}
                options={news ? news: undefined}
            />

            <Button style={{marginTop: 50, width: "100%"}}>Delete News</Button>
        </form>
    )
} 
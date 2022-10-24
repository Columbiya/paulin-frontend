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
    image: FileList
    newsId: number
}

export const EditNewsImage: React.FC<CreateChapterProps> = ({ onHide, setSuccess, setError }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<CreateChapterValues>()
    const [isSafeToReset, setSafeToReset] = useState(false)
    const [item, loading, error, lazyLoadFunc] = useHttp(
        {link: '/news', method: Methods.PUT, useAuth: true, isLazy: true, store: null}
    )
    const [news, newsLoading, newsError] = useHttp<News[]>(
        {link: '/news', method: Methods.GET, store: newsStore, useAuth: false}
    )

    const onSubmit: SubmitHandler<CreateChapterValues> = async (data) => {
        const body = data
        const formData = new FormData()
        formData.append('image', data.image[0])
        formData.append('id', data.newsId.toString())

        if (lazyLoadFunc) {
            await lazyLoadFunc(formData, data.newsId)
        }
    }

    useEffect(() => {
        if (!isSafeToReset) return

        reset() 
        setSafeToReset(false)
    }, [isSafeToReset])

    useEffect(() => {
        if (error) {
            setError(error.message)  
            setSafeToReset(true)
            onHide()      
        }
        else if (!error && item) {
            setSuccess("News Image успешно изменен")  
            setSafeToReset(true)
            onHide()   
        }
    }, [error, item])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="popup-title">Edit News' image</h3>

            <Input 
                fieldName='image'
                name="Image"
                register={register}
                isRequired
                error={errors.image}
                type="file"
            />

            <Input 
                fieldName='newsId'
                name="Partners available"
                register={register}
                placeholder="Выберите News, который будет изменен"
                isDropdown
                setValue={setValue}
                options={news ? news: undefined}
            />

            <Button style={{marginTop: 50, width: "100%"}}>Edit News Image</Button>
        </form>
    )
} 
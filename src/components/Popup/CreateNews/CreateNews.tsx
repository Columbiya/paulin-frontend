import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Methods, useHttp } from '../../../hooks/useHttp'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'

export interface CreateNewsProps {
    onHide: () => void
    setSuccess: (value: string) => void
}

interface CreateNewsValues {
    title: string
    author: string
    image: FileList
}

export const CreateNews: React.FC<CreateNewsProps> = ({ onHide, setSuccess }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateNewsValues>()
    const [isSafeToReset, setSafeToReset] = useState(false)
    const [item, loading, error, lazyLoadFunc] = useHttp(
        {link: '/news', method: Methods.POST, useAuth: true, isLazy: true, store: null}
    )

    const onSubmit: SubmitHandler<CreateNewsValues> = async (data) => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('author', data.author)
        formData.append('image', data.image[0])

        if (lazyLoadFunc) {
            await lazyLoadFunc(formData)
            setSafeToReset(true)
            onHide()
            setSuccess("News успешно создан")
        }
    }

    useEffect(() => {
        if (!isSafeToReset) return

        reset() 
        setSafeToReset(false)
    }, [isSafeToReset])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="popup-title">Create News</h3>

            <Input 
                fieldName='title'
                name="Title"
                register={register}
                isRequired
                error={errors.title}
            />

            <Input 
                fieldName='author'
                name="Author"
                register={register}
                isRequired
                error={errors.author}
            />

            <Input 
                fieldName='image'
                name="Image"
                register={register}
                isRequired
                error={errors.image}
                type="file"
            />

            <Button style={{marginTop: 50, width: "100%"}}>Add News</Button>
        </form>
    )
} 
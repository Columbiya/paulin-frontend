import React, { useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Methods, useHttp } from '../../../hooks/useHttp'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'


export interface CreateNewsProps {
    onHide: () => void
    setSuccess: (value: string) => void
    setError: (value: string) => void
}

interface CreateNewsValues {
    title: string
    author: string
    hider: Hiders
    image: FileList
}

export enum Hiders {
    LIGHT_GREEN = 'LIGHT_GREEN',
    ORANGE_LIGHT = 'ORANGE_LIGHT',
    PURPLE_ORANGE = 'PURPLE_ORANGE',
    RED_PURPLE = 'RED_PURPLE'
}

export const CreateNews: React.FC<CreateNewsProps> = ({ onHide, setSuccess, setError }) => {
    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm<CreateNewsValues>()
    const [isSafeToReset, setSafeToReset] = useState(false)
    const [item, loading, error, lazyLoadFunc] = useHttp(
        {link: '/news', method: Methods.POST, useAuth: true, isLazy: true, store: null}
    )

    const onSubmit: SubmitHandler<CreateNewsValues> = async (data) => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('author', data.author)
        formData.append('hider', data.hider)
        formData.append('image', data.image[0])

        if (lazyLoadFunc) {
            await lazyLoadFunc(formData)
        }
    }

    useEffect(() => {
        if (!isSafeToReset) return

        reset() 
        setSafeToReset(false)
    }, [isSafeToReset])


    useEffect(() => {
        if (error) {
            console.log('hello')
            setError(error.message)  
            setSafeToReset(true)
            onHide()      
        }
        else if (!error && item) {
            setSuccess("News успешно создан")  
            setSafeToReset(true)
            onHide()   
        }
    }, [error, item])

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
                fieldName='hider'
                name="Hider"
                register={register}
                isDropdown
                options={[Hiders.LIGHT_GREEN, Hiders.ORANGE_LIGHT, Hiders.PURPLE_ORANGE, Hiders.RED_PURPLE]}
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

            <Button 
                style={{marginTop: 50, width: "100%"}}
                disabled={loading}
            >Add News</Button>
        </form>
    )
} 
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
}

interface CreateChapterValues {
    name: string
    link: string
    logo: FileList
    partnerId: number
}

export const EditPartner: React.FC<CreateChapterProps> = ({ onHide, setSuccess }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<CreateChapterValues>()
    const [isSafeToReset, setSafeToReset] = useState(false)
    const [item, loading, error, lazyLoadFunc] = useHttp(
        {link: '/partners', method: Methods.POST, useAuth: true, isLazy: true, store: null}
    )
    const [news, newsLoading, newsError] = useHttp<News[]>(
        {link: '/partners', method: Methods.GET, store: newsStore, useAuth: false}
    )

    const onSubmit: SubmitHandler<CreateChapterValues> = async (data) => {
        const body = data
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('link', data.link)
        formData.append('logo', data.logo[0])
        formData.append('partnerId', data.partnerId.toString())

        if (lazyLoadFunc) {
            await lazyLoadFunc(body, data.partnerId)
            setSafeToReset(true)
            onHide()
            setSuccess("Partner изменен успешно")
        }
    }

    useEffect(() => {
        if (!isSafeToReset) return

        reset() 
        setSafeToReset(false)
    }, [isSafeToReset])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="popup-title">Edit partner</h3>

            <Input 
                fieldName='name'
                name="Name"
                register={register}
                isRequired
                error={errors.name}
            />

            <Input 
                fieldName='link'
                name="Link"
                register={register}
                isRequired
                error={errors.link}
            />

            <Input 
                fieldName='logo'
                name="Logo"
                register={register}
                isRequired
                error={errors.logo}
                type="file"
            />

            <Input 
                fieldName='partnerId'
                name="Partners available"
                register={register}
                placeholder="Выберите Partner, который будет изменен"
                isDropdown
                setValue={setValue}
                options={news ? news: undefined}
            />

            <Button style={{marginTop: 50, width: "100%"}}>Add Chapter</Button>
        </form>
    )
} 
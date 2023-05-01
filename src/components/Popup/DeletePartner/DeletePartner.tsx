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
    setError: (val: string) => void
}

interface CreateChapterValues {
    partnerId: number
}

export const DeletePartner: React.FC<CreateChapterProps> = ({ onHide, setSuccess }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<CreateChapterValues>()
    const [isSafeToReset, setSafeToReset] = useState(false)
    const [item, loading, error, lazyLoadFunc] = useHttp(
        {link: '/partners', method: Methods.DELETE, useAuth: true, isLazy: true, store: null}
    )
    const [news, newsLoading, newsError] = useHttp<News[]>(
        {link: '/partners', method: Methods.GET, store: newsStore, useAuth: false}
    )

    const onSubmit: SubmitHandler<CreateChapterValues> = async (data) => {
        if (lazyLoadFunc) {
            await lazyLoadFunc(null, data.partnerId)
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
            <h3 className="popup-title">Delete Partner</h3>

            <Input 
                fieldName='partnerId'
                name="Partners available"
                register={register}
                placeholder="Выберите Partner, который будет удален"
                isDropdown
                setValue={setValue}
                options={news ? news: undefined}
            />

            <Button style={{marginTop: 50, width: "100%"}}>Delete Partner</Button>
        </form>
    )
} 
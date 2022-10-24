import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Methods, useHttp } from '../../../hooks/useHttp'
import { Partner } from '../../../schemas/Partner'
import { partnersStore } from '../../../store/partnersStore'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'

export interface CreateFeedbackProps {
    onHide: () => void
    setSuccess: (value: string) => void
    setError: (val: string) => void
}

interface CreateFeedbackValues {
    text: string
    rating: number
    expert: string
    partnerId: number
}

const isLessThan5 = (val: string) => !isNaN(+val) && +val <= 5
const isMoreThan0 = (val: string) => !isNaN(+val) && +val > 0

export const CreateFeedback: React.FC<CreateFeedbackProps> = ({ onHide, setSuccess }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<CreateFeedbackValues>()
    const [isSafeToReset, setSafeToReset] = useState(false)
    const [item, loading, error, lazyLoadFunc] = useHttp(
        {link: '/feedback', method: Methods.POST, useAuth: true, isLazy: true, store: null}
    )
    const [news, newsLoading, newsError] = useHttp<Partner[]>(
        {link: '/partners', method: Methods.GET, store: partnersStore, useAuth: false}
    )

    const onSubmit: SubmitHandler<CreateFeedbackValues> = async (data) => {
        const body = data

        if (lazyLoadFunc) {
            await lazyLoadFunc(body)
            setSafeToReset(true)
            onHide()
            if (!error) {
                setSuccess("Feedback создан успешно")
            }
            else {
                alert('что то пошло не так')
            }
        }
    }

    useEffect(() => {
        if (!isSafeToReset) return

        reset() 
        setSafeToReset(false)
    }, [isSafeToReset])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="popup-title">Create Feedback for Partner</h3>

            <Input 
                fieldName='text'
                name="Text"
                register={register}
                isRequired
                error={errors.text}
                type="textarea"
            />

            <Input 
                fieldName='expert'
                name="Expert text"
                register={register}
                isRequired
                error={errors.expert}
                type="textarea"
            />

            <Input 
                fieldName='rating'
                name="Rating"
                register={register}
                isRequired
                error={errors.rating}
                validate={{isLessThan: isLessThan5, isMoreThan: isMoreThan0}}
            />

            <Input 
                fieldName='partnerId'
                name="Partners Available"
                register={register}
                placeholder="Выберите Partner, отзыв которого хотите создать"
                isDropdown
                setValue={setValue}
                options={news ? news: undefined}
            />

            <Button style={{marginTop: 50, width: "100%"}}>Add Feedback</Button>
        </form>
    )
} 
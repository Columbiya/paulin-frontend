import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './RequestForm.scss'

interface FormValues {
    nameSurname: string
    whatWeDo: string
    phoneNumber: string
    companyName: string
    serviceType: string
    email: string
}

export const RequestForm: React.FC = (props) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    const validateEmail = (s: string) => {
        return /\S+@\S+\.\S+/.test(s);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="request__form">
            <Input 
                register={register}
                fieldName="companyName"
                name="Название компании" 
                isRequired
                error={errors.companyName}
            />
            <Input 
                register={register}
                fieldName="nameSurname"
                name="ФИО" 
                error={errors.nameSurname}
                isRequired
            />
            <Input 
                register={register}
                fieldName="phoneNumber"
                name="Телефон"
                isRequired
                error={errors.phoneNumber}
                maxLength={11}
            />
            <Input 
                register={register}
                fieldName="serviceType"
                setValue={setValue}
                name="Тип услуги"
                isDropdown
                isRequired  
                error={errors.serviceType}
            />
            <Input 
                register={register}
                fieldName="whatWeDo"
                name="Сфера деятельности компании"
                isRequired
                error={errors.whatWeDo}
            />
            <Input 
                register={register}
                fieldName="email"
                name="Email"
                isRequired
                validate={{email: validateEmail}}
                error={errors.email}
            />

            <Button isWhite>Отправить заявку</Button>
        </form>
    )
} 
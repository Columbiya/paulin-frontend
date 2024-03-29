import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { myAxios } from 'http/axios'
import { Request } from 'schemas/Request'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'
import './RequestForm.scss'

interface RequestFormProps {
  isPopup?: boolean
  onHide?: () => void
}

interface FormValues {
  nameSurname: string
  whatWeDo: string
  phoneNumber: string
  companyName: string
  serviceType: string
  email: string
}

export const RequestForm: React.FC<RequestFormProps> = ({
  isPopup,
  onHide,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>()

  const popupClasses = isPopup ? 'request__form-popup' : undefined

  const onSubmit: SubmitHandler<FormValues> = async ({
    companyName,
    email,
    nameSurname,
    phoneNumber,
    serviceType,
    whatWeDo,
  }) => {
    let string = `Название компании: ${companyName}\nemail: ${email};\nФИО: ${nameSurname};\nТелефон: ${phoneNumber};\nТип услуги: ${serviceType};\nСфера деятельности: ${whatWeDo}`
    console.log(serviceType)
    const request = await myAxios.post<Request>('/requests', {
      name: nameSurname,
      whatYouDo: whatWeDo,
      phone: phoneNumber,
      companyName,
      typeService: serviceType,
      email,
    })

    if (onHide) {
      onHide()
    }
  }

  const validateEmail = (s: string) => {
    return /\S+@\S+\.\S+/.test(s)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`request__form ${popupClasses}`}>
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
        placeholder="Выберите услугу"
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
        validate={{ email: validateEmail }}
        error={errors.email}
      />

      <Button isWhite>Отправить заявку</Button>
    </form>
  )
}

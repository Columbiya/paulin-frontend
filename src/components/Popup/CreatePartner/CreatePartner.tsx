import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Methods, useHttp } from '../../../hooks/useHttp'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'

export interface CreatePartnerProps {
  onHide: () => void
  setSuccess: (value: string) => void
  setError: (val: string) => void
}

interface CreatePartnerValues {
  name: string
  link: string
  logo: FileList
}

export const CreatePartner: React.FC<CreatePartnerProps> = ({
  onHide,
  setSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePartnerValues>()
  const [isSafeToReset, setSafeToReset] = useState(false)
  const [item, loading, error, lazyLoadFunc] = useHttp({
    link: '/partners',
    method: Methods.POST,
    useAuth: true,
    isLazy: true,
    store: null,
  })

  const onSubmit: SubmitHandler<CreatePartnerValues> = async (data) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('link', data.link)
    formData.append('logo', data.logo[0])

    if (lazyLoadFunc) {
      await lazyLoadFunc(formData)
      setSafeToReset(true)
      onHide()
      setSuccess('Partner успешно создан')
    }
  }

  useEffect(() => {
    if (!isSafeToReset) return

    reset()
    setSafeToReset(false)
  }, [isSafeToReset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="popup-title">Create Partner</h3>

      <Input
        fieldName="name"
        name="Name"
        register={register}
        isRequired
        error={errors.name}
      />

      <Input
        fieldName="link"
        name="Link"
        register={register}
        isRequired
        error={errors.link}
      />

      <Input
        fieldName="logo"
        name="Logo"
        register={register}
        isRequired
        error={errors.logo}
        type="file"
      />

      <Button style={{ marginTop: 50, width: '100%' }}>Add Partner</Button>
    </form>
  )
}

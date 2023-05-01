import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'
import { PagesRoutes } from 'routes'
import { authStore } from 'store/authStore'
import './AuthPage.scss'

interface AuthValues {
    login: string
    password: string
}

export const AuthPage: React.FC = observer((props) => {
    const { register, handleSubmit, formState: { errors }} = useForm<AuthValues>()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<AuthValues> = async ({login, password}) => {
        setLoading(true)
        await authStore.login(login, password)
        setLoading(false)
    }

    useEffect(() => {
        const isAuthorized = authStore.item
        
        if (isAuthorized) {
            navigate(PagesRoutes.ADMIN_PANEL)
        }
    }, [authStore.item])

    return (
        <main className="main auth-page">
            <form className="auth" onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    register={register}
                    fieldName="login"
                    placeholder='Username'
                    isRequired
                    error={errors.login}
                />

                <Input 
                    register={register}
                    fieldName="password"
                    placeholder='password'
                    isRequired
                    error={errors.password}
                />

                <Button disabled={loading}>Авторизоваться</Button>
            </form>
        </main>
    )
})
import { Dispatch, SetStateAction } from 'react'

export type UseAuthType = {
    middleware?: string,
    redirectIfAuthenticated?: string
}

export type RegisterType = {
    setErrors: Dispatch<SetStateAction<string[]>>
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}

export type LoginType = {
    setErrors: Dispatch<SetStateAction<string[]>>
    setStatus: Dispatch<SetStateAction<string | string[] | null>>
    email: string,
    password: string,
    remember: boolean,
}

export type ForgotPasswordType = {
    setErrors: Dispatch<SetStateAction<string[]>>
    setStatus: Dispatch<SetStateAction<string | string[] | null>>
    email: string,
}

export type ResetPasswordType = {
    setErrors: Dispatch<SetStateAction<string[]>>
    setStatus: Dispatch<SetStateAction<string | string[] | null>>
    email: string | string[]
    password: string
    password_confirmation: string
}

export type ResendEmailVerificationType = {
    setStatus: Dispatch<SetStateAction<string | string[] | null>>
}

export type UserType = {
    user: {
        id?: number 
        name?: string
        email?: string
        email_verified_at?: Date
        created_at?: Date
        updated_at?: Date
    }
}
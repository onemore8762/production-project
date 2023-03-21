import { type Currency } from 'entities/Currency/modal/types/currency'
import { type Country } from 'entities/Country/modal/types/country'

export interface Profile {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
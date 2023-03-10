import { type FC, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    useEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
}
export default ProfilePage

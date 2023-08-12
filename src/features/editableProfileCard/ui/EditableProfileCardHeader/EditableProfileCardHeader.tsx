import { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
    const {
        className
    } = props
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const readonly = useSelector(getProfileReadonly)
    const canEdit = authData?.id === profileData?.id
    const dispatch = useAppDispatch()
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        void dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack gap={'8'}>
                                <Button
                                    onClick={onCancelEdit}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    onClick={onSave}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )
                    }
                </>
            )}

        </HStack>
    )
}

import { useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        onCancel,
        onAccept,
        hasFeedback,
        feedbackTitle,
        title,
        rate = 0
    } = props
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStartsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStartsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount)
    }, [onAccept, starsCount])

    const modalContent = (
        <>
            <Text title={feedbackTitle}/>
            <Input value={feedback}
                   onChange={setFeedback}
                   placeholder={t('Ваш отзыв')}/>
        </>
    )

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])} max>
            <VStack align={'center'} gap={'8'} max>
                <Text title={starsCount ? t('Спасибо за оценку!') : title}/>
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars}></StarRating>
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen}>
                    <VStack max gap={'32'}>
                        {modalContent}
                        <HStack max gap={'16'} justify={'end'}>
                            <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={acceptHandle}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                    <VStack gap={'32'}>
                        {modalContent}
                        <Button onClick={acceptHandle} size={ButtonSize.L} fullWidth>
                            {t('Отправить')}
                        </Button>
                    </VStack>

                </Drawer>
            </MobileView>

        </Card>
    )
}

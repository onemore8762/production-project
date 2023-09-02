import {
    type ChangeEvent,
    type InputHTMLAttributes,
    memo,
    type RefObject,
    type SyntheticEvent,
    useRef,
    useState
} from 'react'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props
    // const ref = useRef<HTMLInputElement>()
    const ref = useRef() as RefObject<HTMLInputElement>
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    const isCaretVisible = isFocused && !readonly

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onBlur = (): void => {
        setIsFocused(false)
    }

    const onFocus = (): void => {
        setIsFocused(true)
    }
    const onSelect = (e: SyntheticEvent<HTMLInputElement, Event>): void => {
        setCaretPosition(e?.currentTarget?.selectionStart || 0)
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {
                placeholder &&
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            }
            <div className={cls.caretWrapper}>
                <input ref={ref}
                       type={type}
                       value={value}
                       className={cls.input}
                       onChange={onChangeHandler}
                       onFocus={onFocus}
                       onBlur={onBlur}
                       onSelect={onSelect}
                       readOnly={readonly}
                       {...otherProps}
                />
                {isCaretVisible &&
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 8.8}px` }}
                    />
                }
            </div>
        </div>
    )
})

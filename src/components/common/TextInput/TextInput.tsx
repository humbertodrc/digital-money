import clsx from 'clsx'
import { forwardRef } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"


/**
 * Componente TextInput para entradas de formulario.
 * @type {React.FC<TextInputProps & React.InputHTMLAttributes<HTMLInputElement>>}
 */

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  hasError?: boolean
  errorText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  wrapperClassName?: string
}

const TextInput = forwardRef(function TextInput(
  { wrapperClassName, className, type = 'text', hasError, errorText, ...props }: TextInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  hasError = hasError || Boolean(errorText)
  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        ref={ref}
        {...props}
        className={clsx(
          'w-full rounded-lg text-black text-base transition outline-none',
          className,
          {
            'border-primary  focus:outline-primary': !hasError,
            'border-error  focus:outline-error': hasError
          }
        )}
        title={errorText as string}
      />
      {errorText && (
        <p
          className="text-sm italic text-error font-normal mt-1 py-1 pl-3 left-2 pr-3  truncate peer-focus:opacity-0 pointer-events-none transition text-left w-full"
          style={{
            maxWidth: 'calc(100% - 1rem)'
          }}
        >
          {errorText as string}
        </p>
      )}
    </div>
  )
})

export default TextInput

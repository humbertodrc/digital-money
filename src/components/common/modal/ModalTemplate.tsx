'use client'
import { Fragment } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle, TransitionChild, Transition } from '@headlessui/react'
import clsx from 'clsx'

interface ModalTemplateProps {
  show: boolean
  onClose: () => void
  children: React.ReactNode
  initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined
  zIndex?: number
  hideBackdrop?: boolean
  position?: 'center' | 'top' | 'bottom'
}

/**
 * Componente de modal personalizado utilizando Headless UI.
 *
 * @component
 *
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.show - Indica si el modal debe mostrarse o no.
 * @param {Function} props.onClose - Función de devolución de llamada para cerrar el modal.
 * @param {ReactNode} props.children - Contenido del modal.
 * @param {Ref} [props.initialFocus=null] - Elemento que debe recibir el foco cuando el modal se abre.
 * @param {number} [props.zIndex=60]
 * @param {boolean} [props.hideBackdrop=false]
 * @param {'center' | 'top' | 'bottom'} [props.position='center']
 *
 * @returns {JSX.Element} Componente de modal personalizado.
 */
export default function ModalTemplate({ show, onClose, children, initialFocus, zIndex = 60, hideBackdrop, position = 'center' }: ModalTemplateProps) {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog as="div" className="relative" onClose={onClose} initialFocus={initialFocus} style={{ zIndex }}>
        {!hideBackdrop && (
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-sm bg-black/50" />
          </TransitionChild>
        )}

        <div className="fixed inset-0 overflow-y-auto">
          <div className={clsx('flex h-full min-h-full justify-center p-4 text-center', {
            'items-center': position === 'center',
            'items-start': position === 'top',
            'items-end': position === 'bottom'
          })}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {children}
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

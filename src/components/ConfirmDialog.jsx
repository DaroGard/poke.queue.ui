"use client"
// Implementa una confirmación (ej. un diálogo modal) antes de proceder con la eliminación.
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react" //Nueva dependencia que usaremos para animacion de la modal
import { Button } from "@/components/ui/button"

export function ConfirmDialog({ isOpen, title = "Confirmar acción", description = "¿Estás seguro?", onConfirm, onCancel }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onCancel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left shadow-xl transition-all">
                <Dialog.Title className="text-lg font-semibold text-gray-900">{title}</Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-gray-500">{description}</Dialog.Description>

                <div className="mt-6 flex justify-end gap-3">
                  <Button variant="outline" onClick={onCancel}>
                    Cancelar
                  </Button>
                  <Button variant="destructive" onClick={onConfirm}>
                    Eliminar
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
import { Button, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'

 function ProductViewModal({open, setOpen, product, isAvailable}) {
 

const handleClickOpen = () => {
    setOpen(true)
}

  const {productId, productName, image, description, quantity, price,discount,specialPrice} = product

  return (
    <>
     

      <Dialog open={open} as="div" className="relative z-10" onClose={close}>
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-[620px] md:min-2-[620px] w-full"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-slate-800">
                {productName}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-slate-600">
             {description}
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProductViewModal;
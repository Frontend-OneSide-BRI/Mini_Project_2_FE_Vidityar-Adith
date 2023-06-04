import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ModalLogin({ isOpen, handleOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-gray-800 border border-gray-700 rounded-lg border border-gray-200 rounded-lg px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <form>
                    <h5 className="text-xl font-medium text-white border-b border-b-2 pb-3">
                      Log in to your account
                    </h5>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white mt-4"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-700 border border-gray-600 text-[#27f527] text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="bg-gray-700 border border-gray-600 text-[#27f527] text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                        required
                      />
                    </div>
                    <button
                      type="button"
                      className="text-white bg-gray-700 hover:bg-gray-500 focus:ring-2 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-3"
                      onClick={handleOpen}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      onClose={handleOpen}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

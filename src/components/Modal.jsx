const Modal = ({ children, closeModal }) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"
        onClick={closeModal}
      />
      <div className="fixed flex gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-700 border-2 border-orange-600 rounded-md px-5 py-5 z-20">
        {children}
      </div>
    </div>
  )
}

export default Modal

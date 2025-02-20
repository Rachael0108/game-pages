export function useModal (modalRef) {
  const handleCloseModal = () => {
    modalRef.current?.close()
  }
  const handleOpenModal = () => {
    modalRef.current.open();
  };
  return {
    modalRef,
    handleCloseModal,
    handleOpenModal
  }
}

const handleUpdate = () => {
  dispatch(editRegistration({ id: data.id, data }));
  closeModal();
};

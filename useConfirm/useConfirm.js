const useConfirm = (message = "", onConfirm, onCanCel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCanCel && typeof onCanCel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCanCel();
    }
  };
  return confirmAction;
};

export default useConfirm;

let toastRef;

export const setToastRef = (ref) => {
  toastRef = ref;
};

// Show toast function
export const showToast = (msg) => {
  if (toastRef) {
    toastRef.setMessage(msg);
    toastRef.setOpen(true);
  } else {
    console.warn("Toaster not initialized!");
  }
};

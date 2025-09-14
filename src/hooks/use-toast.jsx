import * as ToastPrimitives from "@radix-ui/react-toast";
import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastPrimitives.Provider swipeDirection="right">
        {toasts.map((t) => (
          <ToastPrimitives.Root
            key={t.id}
            open
            onOpenChange={(open) => !open && removeToast(t.id)}
            className="bg-card text-foreground rounded-lg p-4 shadow-lg mb-2"
            duration={5000}
          >
            <ToastPrimitives.Title className="font-bold">
              {t.title}
            </ToastPrimitives.Title>
            <ToastPrimitives.Description>{t.description}</ToastPrimitives.Description>
            <ToastPrimitives.Action asChild altText="Close">
              <button className="text-primary ml-2">OK</button>
            </ToastPrimitives.Action>
          </ToastPrimitives.Root>
        ))}
        <ToastPrimitives.Viewport className="fixed bottom-5 right-5 flex flex-col gap-2" />
      </ToastPrimitives.Provider>
    </ToastContext.Provider>
  );
};

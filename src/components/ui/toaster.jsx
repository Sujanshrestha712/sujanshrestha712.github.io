import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export const Toaster = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-80 border border-gray-200 dark:border-gray-700"
      >
        <Toast.Title className="font-bold text-gray-900 dark:text-white">
          Notification
        </Toast.Title>
        <Toast.Description className="text-gray-700 dark:text-gray-300 mt-1">
          {message}
        </Toast.Description>
        <Toast.Action
          className="ml-auto px-3 py-1 text-sm text-primary hover:underline"
          asChild
        >
          <button onClick={() => setOpen(false)}>Close</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2" />
    </Toast.Provider>
  );
};

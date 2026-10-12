import { useState } from "react";
import { sendMessage } from "@/lib/api";

const EMPTY = { name: "", email: "", message: "", website: "" };

/** Form state + submit lifecycle: idle -> sending -> sent | error. */
export function useContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrors({});
    const result = await sendMessage(values);
    if (result.ok) {
      setValues(EMPTY);
      setStatus("sent");
    } else {
      setErrors(result.errors);
      setStatus("error");
    }
  };

  return { values, errors, status, onChange, onSubmit };
}

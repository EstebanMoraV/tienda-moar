// src/components/molecules/ToastManager.tsx
import { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";

type ToastMessage = { id: number; text: string };
type Props = { toasts: ToastMessage[]; remove: (id: number) => void };

export default function ToastManager({ toasts, remove }: Props) {
  const toastRefs = useRef<Map<number, HTMLElement>>(new Map());

  useEffect(() => {
    toasts.forEach((t) => {
      const el = toastRefs.current.get(t.id);
      if (!el) return;

      const bsToast = new bootstrap.Toast(el, { delay: 2500, autohide: true });
      bsToast.show();

      const onHidden = () => remove(t.id);
      el.addEventListener("hidden.bs.toast", onHidden, { once: true });
    });
  }, [toasts, remove]);

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    >
      {toasts.map((t) => (
        // importante: incluir la clase 'fade' para animación
        <div
          key={t.id}
          className="toast text-bg-dark border-0 fade"
          ref={(el) => el && toastRefs.current.set(t.id, el)}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{t.text}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
        </div>
      ))}
    </div>
  );
}



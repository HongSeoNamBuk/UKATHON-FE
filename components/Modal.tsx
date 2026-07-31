import { Button } from "@/components/Button";

type ModalProps = {
  title: string;
  description: string;
  dismissLabel: string;
  confirmLabel: string;
  onDismiss: () => void;
  onConfirm: () => void;
};

export default function Modal({
  title,
  description,
  dismissLabel,
  confirmLabel,
  onDismiss,
  onConfirm,
}: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
      onClick={onDismiss}
    >
      <div
        className=" rounded-3xl bg-white p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="text-title-emphasis-22 text-99">{title}</p>
        <p className="mt-2 text-title-18 text-70">{description}</p>

        <div className="mt-9 flex gap-4">
          <Button variant="secondary" className="flex-1 bg-fill" onClick={onDismiss}>
            {dismissLabel}
          </Button>

          <Button className="flex-1" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

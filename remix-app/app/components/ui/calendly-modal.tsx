import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { PERSONAL_INFO } from "~/constants";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.getElementById("root") || document.body;
      setRootElement(root);
    }
  }, []);

  if (!rootElement || !PERSONAL_INFO.calendlyUrl) return null;

  return (
    <PopupModal
      url={PERSONAL_INFO.calendlyUrl}
      onModalClose={onClose}
      open={isOpen}
      rootElement={rootElement}
    />
  );
};

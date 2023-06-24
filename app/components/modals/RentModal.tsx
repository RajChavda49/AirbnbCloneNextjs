"use client";

import Modal from "./Modal";

import uesRentModal from "../../hooks/useRentModal";
import { useMemo, useState } from "react";

enum STEPS {
  CATEGORY = 0,
  LOCAITON = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = uesRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondayActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  return (
    <Modal
      title="Airbnb your home!"
      isOpen={rentModal.isOpen}
      onSubmit={rentModal.onClose}
      onClose={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      secondaryActionLabel={secondayActionLabel}
    />
  );
};

export default RentModal;

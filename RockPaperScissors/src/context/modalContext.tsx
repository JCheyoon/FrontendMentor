import React, { createContext, useState } from "react";

export type DefaultValue = {
  showModal: () => void;
  hideModal: () => void;
  show: boolean;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext<DefaultValue>({} as DefaultValue);

export const ModalProvider = ({ children }: ProviderProps) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  const modalValue: DefaultValue = {
    showModal,
    hideModal,
    show,
  };

  return (
    <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>
  );
};

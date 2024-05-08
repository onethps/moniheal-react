import { useCallback, useState } from "react";

const useModalHandler = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggleVisible = useCallback(
    () => setIsVisible((visible) => !visible),
    []
  );

  const hideModal = useCallback(() => setIsVisible(false), []);
  const showModal = useCallback(() => setIsVisible(true), []);

  return [isVisible, toggleVisible, hideModal, showModal] as const;
};

export default useModalHandler;

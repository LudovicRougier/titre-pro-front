import { useEffect, useState } from "react";

export const useShow = (defaultValue = false) => {
  const [show, setShow] = useState(defaultValue);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const toggle = () => setShow((current: boolean) => !current);

  useEffect(() => {
    setShow(defaultValue);
  }, [defaultValue]);

  return { show, handleShow, handleClose, toggle };
};

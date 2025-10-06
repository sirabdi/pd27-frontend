import { useState } from 'react';

const useDialog = <T = unknown>() => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  const saveData = (data: T) => {
    setData(data);
  };

  const clearData = () => {
    setData(undefined);
  };

  return {
    visible,
    open,
    close,
    data,
    saveData,
    clearData,
  };
};

export default useDialog;

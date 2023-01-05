import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Khabar`;
  }, [title]);
};

export default useTitle;

import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - React EBook App`;
    }, [title]);
    return null;
};

export { useTitle };
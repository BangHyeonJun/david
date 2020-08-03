import { useState, useEffect } from 'react';

type sizeType = {
    width?: number;
    height?: number;
};

// type hooksType = {
//     size: sizeType;
//     setSize: Function;
// };

// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
        };
    }

    const [windowSize, setWindowSize] = useState<sizeType>(getSize);

    function handleResize() {
        setWindowSize(getSize());
    }

    function setResize() {
        if (!isClient) {
            return false;
        }

        window.addEventListener('resize', handleResize);
    }

    function removeResize() {
        window.removeEventListener('resize', handleResize);
    }

    useEffect(() => {
        setResize();
        return () => removeResize();
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return [windowSize.width, windowSize.height];
}
export default useWindowSize;

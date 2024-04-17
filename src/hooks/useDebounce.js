import { useEffect } from 'react';
import { useTimeOut } from './useTimeOut.js';

export const useDebounce = (callback, delay, deps) => {
    const { reset, clear } = useTimeOut(callback, delay);

    useEffect(reset, [...deps, reset]);
    useEffect(clear, []);
}
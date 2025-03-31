'use client';

import { FlashMessage as FlashMessageType, SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

export const FlashMessage = ({ flashMessage }: { flashMessage: FlashMessageType }) => {
    useEffect(() => {
        if (flashMessage.success) {
            toast.success(flashMessage.success);
        }

        if (flashMessage.danger) {
            toast.error(flashMessage.danger);
        }

        if (flashMessage.warning) {
            toast.warning(flashMessage.warning);
        }
    }, []);

    return null;
};

type FlashMessageContextType = {
    flashMessage: FlashMessageType | null;
    setFlashMessage: (message: FlashMessageType) => void;
    clearFlashMessage: () => void;
};

// Create the context with default values
const FlashMessageContext = createContext<FlashMessageContextType>({
    flashMessage: null,
    setFlashMessage: () => {},
    clearFlashMessage: () => {},
});

// Custom hook to use the flash message context
export const useFlashMessage = () => useContext(FlashMessageContext);

// Provider component
export const FlashMessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [flashMessage, setFlashMessage] = useState<FlashMessageType | null>(null);

    // Get flash message directly from page props as you're doing
    const { flashMessage: pageFlashMessage } = usePage<SharedData>().props;

    // Update flash message when page props change
    useEffect(() => {
        if (pageFlashMessage && (pageFlashMessage.success || pageFlashMessage.danger || pageFlashMessage.warning)) {
            setFlashMessage(pageFlashMessage);
        }
    }, [pageFlashMessage]);

    // Clear flash message after a certain time
    useEffect(() => {
        if (flashMessage && (flashMessage.success || flashMessage.danger || flashMessage.warning)) {
            const timer = setTimeout(() => {
                setFlashMessage(null);
            }, 5000); // Auto-dismiss after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [flashMessage]);

    const clearFlashMessage = () => {
        setFlashMessage(null);
    };

    return <FlashMessageContext.Provider value={{ flashMessage, setFlashMessage, clearFlashMessage }}>{children}</FlashMessageContext.Provider>;
};

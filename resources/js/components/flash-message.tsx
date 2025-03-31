'use client';

import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function FlashMessage() {
    const { flashMessage } = usePage<SharedData>().props;

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
    }, [flashMessage]);

    return null;
}

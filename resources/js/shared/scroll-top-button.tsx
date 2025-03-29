'use client';

import { ButtonLink } from '@/components/ui/button-link';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY >= 300);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!showButton) return <></>;

    return (
        <div className="relative">
            <ButtonLink
                preloader={false}
                dimension="sm"
                variant="secondary"
                className="animate-in fixed right-3 bottom-8"
                href={window.location.href + '#'}
            >
                <ChevronUp size={15} />
            </ButtonLink>
        </div>
    );
};

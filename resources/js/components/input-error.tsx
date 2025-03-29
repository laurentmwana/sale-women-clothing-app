import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={cn('text-xs text-red-600 dark:text-red-400 my-2', className)}>
            {message}
        </p>
    ) : null;
}

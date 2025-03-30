import { Product } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs));
};

export const mergeParameterUrl = (url: string): string => {
    const nextUrl = new URL(url);
    const currentUrl = new URL(window.location.href);

    return '';
};

export const storageSourceUrl = (url: string): string => `/storage/${url}`;

export const imageUrl = (url: string): string => `/images/${url}`;

export const truncate = (str: string, n: number, separator: string): string => {
    if (!str) return '';

    if (str.length <= n) {
        return str;
    }

    const subString = str.substring(0, n - 1);

    return subString.substring(0, subString.lastIndexOf(' ')) + separator;
};

export const productTotal = (products: Product[]): string => {
    let total = 0;

    for (const product of products) {
        total = +product.price;
    }

    return total.toFixed(2);
};

export const formatPrice = (price: number) => price.toFixed(2) + ' Fc';

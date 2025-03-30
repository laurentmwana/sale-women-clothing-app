import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';
import { Product } from '@/types';
import { useForm } from '@inertiajs/react';
import { Lock, ShoppingCart } from 'lucide-react';
import { FormEvent } from 'react';

type ProductActionProps = { product: Product; lowStock: boolean };

export const ProductAction = ({ product, lowStock }: ProductActionProps) => {
    const { post, processing } = useForm();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('card.create', { id: product.id }), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    return lowStock ? (
        <Button variant="destructive" size="icon">
            <Lock size={15} />
        </Button>
    ) : (
        <form onSubmit={onSubmit}>
            <Button disabled={processing} size="sm" variant="secondary">
                {processing ? <Loader size={15} /> : <ShoppingCart size={15} />}
            </Button>
        </form>
    );
};

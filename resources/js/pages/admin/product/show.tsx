import AppLayout from '@/layouts/app-layout';
import { Product, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Produits',
        href: route('#product.index'),
    },
    {
        title: 'En savoir plus sur un produit',
        href: '',
    },
];

type ProduitShowProps = { product: Product } & SharedData;

const ProduitShow = () => {
    const { product, auth } = usePage<ProduitShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex items-center justify-between gap-5">
                        <h2 className="text-base font-semibold">{product.name}</h2>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ProduitShow;

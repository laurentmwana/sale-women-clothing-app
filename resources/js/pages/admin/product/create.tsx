import AppLayout from '@/layouts/app-layout';
import { FormatterObject, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ProductForm } from './product-form';

const title = `Ajout d'un produit`;

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Produits',
        href: route('#product.index'),
    },
    {
        title,
        href: '',
    },
];

type ProductCreateProps = { categories: FormatterObject[] };

const ProductCreate = () => {
    const { categories } = usePage<ProductCreateProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-base font-semibold">{title}</h2>
                        <ProductForm price={0} categoriesItems={categories} name="" description="" categoriesId={[]} id={null} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ProductCreate;

import AppLayout from '@/layouts/app-layout';
import { FormatterObject, Product, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ProductForm } from './product-form';

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

type ProductEditProps = { product: Product; categories: FormatterObject[] };

const ProductEdit = () => {
    const { product, categories } = usePage<ProductEditProps>().props;

    const title = `Editer le produit #${product.id}`;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-base font-semibold">{title}</h2>
                        <ProductForm
                            categoriesItems={categories}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            categoriesId={product.categories.map((c) => c.id)}
                            id={product.id}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ProductEdit;

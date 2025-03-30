import { BaseLayout } from '@/layouts/base-layout';
import { SectionHeaderPage } from '@/shared/section-page';
import { Product } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ProductDetail } from './product-card';

const title = 'En savoir plus un produit';

type ProductShowProps = { product: Product };

const ProductShow = () => {
    const { product } = usePage<ProductShowProps>().props;

    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container py-12">
                <div className="container-center">
                    <SectionHeaderPage title={title} />

                    <ProductDetail product={product} />
                </div>
            </div>
        </BaseLayout>
    );
};
export default ProductShow;

import { Pagination } from '@/components/ui/pagination';
import { BaseLayout } from '@/layouts/base-layout';
import { SectionHeaderPage } from '@/shared/section-page';
import { Category, FormatterObject, PaginationData, Product } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ProductGridCollection } from './product-card';
import { SearchInput } from '@/shared/search-input';
import { ProductFilter } from './product-filter';

const title = 'Collection des produits';

type ProductIndexProps = { categories: Category[]; products: PaginationData<Product> };

const ProductIndex = () => {
    const { categories, products } = usePage<ProductIndexProps>().props;

    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container py-12">
                <div className="container-center">
                    <SectionHeaderPage title={title}>
                        Vous avez un problème technique ? Vous souhaitez envoyer des commentaires sur une fonctionnalité bêta ? Besoin de détails sur
                        notre plan Business ? Faites le nous savoir.
                    </SectionHeaderPage>


                    <div className="mb-6 flex items-center justify-between gap-3">
                            <SearchInput lenghtData={products.total} urlBack={route('product.index')} />
                            <ProductFilter categories={categories} />
                        </div>

                    <ProductGridCollection products={products.data} />

                    <Pagination paginate={products} />
                </div>
            </div>
        </BaseLayout>
    );
};
export default ProductIndex;

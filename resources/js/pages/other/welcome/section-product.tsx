import { SectionPageTitle } from '@/shared/section-page';
import { Product } from '@/types';
import { ProductGridCollection } from '../product/product-card';

type SectionProductProps = { products: Product[] };

export const SectionProduct = ({ products }: SectionProductProps) => {
    return (
        <section className="my-16">
            <div className="container">
                <div className="container-center">
                    <SectionPageTitle title="Nos vetements">
                        Nos vêtements sont sélectionnés avec soin pour répondre aux envies des femmes modernes, alliant qualité des matières et
                        designs contemporains.
                    </SectionPageTitle>

                    <ProductGridCollection products={products} />
                </div>
            </div>
        </section>
    );
};

import { Product } from '@/types';
import { ProductGrid } from '../product/product-card';

type SectionProductProps = { products: Product[] };

export const SectionProduct = ({ products }: SectionProductProps) => {
    return <ProductGrid products={products} />;
};

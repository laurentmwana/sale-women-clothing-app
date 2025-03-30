import { Badge } from '@/components/ui/badge';
import { storageSourceUrl } from '@/lib/utils';
import { Product } from '@/types';
import { Link } from '@inertiajs/react';
import { Heart } from 'lucide-react';
import { ProductAction } from './product-action';

interface ProductGridProps {
    products: Product[];
    title?: string;
}

export const ProductGrid = ({ products, title = 'Nos Produits' }: ProductGridProps) => {
    return (
        <section className="w-full py-12">
            <div className="container">
                <div className="container-center">
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const ProductCard = ({ product }: { product: Product }) => {
    const isLiked = product.likes.length > 0;
    const inStock = product.stock && product.stock.stock_value > 0;
    const lowStock = product.stock && product.stock.stock_value < 1;

    return (
        <div className="group bg-background dark:border-border relative overflow-hidden rounded-lg border transition-all hover:shadow-md">
            <div className="bg-muted relative aspect-[6/4] overflow-hidden">
                <Link href={`/products/${product.slug}`}>
                    <img
                        width={450}
                        height={600}
                        src={storageSourceUrl(product.image)}
                        alt={product.name}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
                <button
                    className="bg-background/80 hover:bg-background dark:bg-background/60 absolute top-2 right-2 rounded-full p-2 backdrop-blur-sm transition-colors"
                    aria-label={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-foreground'}`} />
                </button>
                {product.categories.length > 0 && (
                    <div className="absolute bottom-2 left-2">
                        <Badge variant="secondary" className="bg-background/80 dark:bg-background/60 backdrop-blur-sm">
                            {product.categories[0].name}
                        </Badge>
                    </div>
                )}

                {/* Indicateur de stock en haut à gauche */}
                {product.stock !== undefined && (
                    <div className="absolute top-2 left-2">
                        <Badge
                            variant={!inStock ? 'destructive' : lowStock ? 'outline' : 'secondary'}
                            className={`${!inStock ? 'bg-destructive/90' : lowStock ? 'border-amber-500 text-amber-500' : 'bg-green-500/80'} backdrop-blur-sm`}
                        >
                            {!inStock
                                ? 'Rupture de stock'
                                : lowStock
                                  ? `Plus que ${product.stock.stock_value} en stock`
                                  : `En stock (${product.stock.stock_value})`}
                        </Badge>
                    </div>
                )}
            </div>
            <div className="p-4">
                <Link href={`/products/${product.slug}`} className="group-hover:underline">
                    <h3 className="font-medium">{product.name}</h3>
                </Link>
                <div className="mt-2 flex items-center justify-between">
                    <p className="font-semibold">{product.price.toFixed(2)} Fc</p>

                    <ProductAction lowStock={!inStock} product={product} />
                </div>
            </div>
        </div>
    );
};

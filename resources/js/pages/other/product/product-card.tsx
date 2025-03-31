import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { storageSourceUrl } from '@/lib/utils';
import { Product } from '@/types';
import { Link } from '@inertiajs/react';
import { ProductAction } from './product-action';

interface ProductGridProps {
    products: Product[];
    title?: string;
}

type ProductGridCollectionProps = { products: Product[] };

export const ProductGridCollection = ({ products }: ProductGridCollectionProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

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
    const inStock = product.stock && product.stock.stock_value > 0;
    const lowStock = product.stock && product.stock.stock_value < 1;

    return (
        <div className="group bg-background dark:border-border relative overflow-hidden rounded-lg border transition-all hover:shadow-md">
            <div className="bg-muted relative aspect-[6/4] overflow-hidden">
                <Link href={route('product.show', { slug: product.slug, id: product.id })}>
                    <img
                        width={450}
                        height={600}
                        src={storageSourceUrl(product.image)}
                        alt={product.name}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

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
                <Link href={route('product.show', { slug: product.slug, id: product.id })} className="group-hover:underline">
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

export const ProductDetail = ({ product }: { product: Product }) => {
    const inStock = product.stock && product.stock.stock_value > 0;
    const lowStock = product.stock && product.stock.stock_value < 1;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-2">
                {/* Image Section */}
                <div className="border-border relative overflow-hidden rounded-xl border">
                    <img
                        src={storageSourceUrl(product.image) || '/placeholder.svg'}
                        alt={product.name}
                        className="aspect-square h-auto w-full object-cover"
                    />
                </div>

                {/* Product Info Section */}
                <div className="flex flex-col space-y-6">
                    <div>
                        <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>

                        {/* Stock Badge */}
                        {product.stock !== undefined && (
                            <Badge
                                variant={!inStock ? 'destructive' : lowStock ? 'outline' : 'secondary'}
                                className={`${
                                    !inStock ? 'bg-destructive/90' : lowStock ? 'border-amber-500 text-amber-500' : 'bg-green-500/80'
                                } mb-4 px-3 py-1 text-sm`}
                            >
                                {!inStock
                                    ? 'Rupture de stock'
                                    : lowStock
                                      ? `Plus que ${product.stock.stock_value} en stock`
                                      : `En stock (${product.stock.stock_value})`}
                            </Badge>
                        )}

                        {/* Price */}
                        <div className="mt-4">
                            <p className="text-3xl font-bold">{product.price.toFixed(2)} Fc</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="border-border border-t pt-4">
                        <h2 className="mb-2 text-xl font-semibold">Description</h2>
                        <p className="text-muted-foreground">{product.description || 'Aucune description disponible pour ce produit.'}</p>
                    </div>

                    {/* Categories */}
                    {product.categories.length > 0 && (
                        <div className="border-border border-t pt-4">
                            <h2 className="mb-2 text-xl font-semibold">Catégories</h2>
                            <div className="flex flex-wrap gap-2">
                                {product.categories.map((category) => (
                                    <Badge key={category.id} variant="outline" className="px-3 py-1">
                                        {category.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="border-border mt-auto border-t pt-6">
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" className="lg:flex-1" disabled={!inStock}>
                                Ajouter au panier
                            </Button>
                        </div>

                        <div className="mt-4">
                            <Link href={route('product.index')} className="text-muted-foreground text-sm hover:underline">
                                ← Retour aux produits
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Product Details Section */}
            <div className="border-border mt-12 border-t pt-8">
                <h2 className="mb-6 text-2xl font-bold">Détails du produit</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Specifications */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Spécifications</h3>
                        <div className="space-y-2">
                            <div className="border-border flex justify-between border-b py-2">
                                <span className="text-muted-foreground">Référence</span>
                                <span className="font-medium">{product.id}</span>
                            </div>
                            {product.stock && (
                                <div className="border-border flex justify-between border-b py-2">
                                    <span className="text-muted-foreground">Quantité en stock</span>
                                    <span className="font-medium">{product.stock.stock_value}</span>
                                </div>
                            )}
                            {/* Add more specifications as needed */}
                        </div>
                    </div>

                    {/* Shipping Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Livraison</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-muted rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <rect width="16" height="13" x="4" y="5" rx="2" />
                                        <path d="M16 2v3" />
                                        <path d="M8 2v3" />
                                        <path d="M4 10h16" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">Livraison rapide</p>
                                    <p className="text-muted-foreground text-sm">Livraison sous 2-3 jours ouvrables</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="bg-muted rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">Garantie</p>
                                    <p className="text-muted-foreground text-sm">Garantie de 30 jours sur tous les produits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

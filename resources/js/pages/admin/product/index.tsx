import { ActionDeleteWithPassword } from '@/components/action-with-password';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button-link';
import { Pagination } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { formatPrice, truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SearchInput } from '@/shared/search-input';
import { FormatterObject, PaginationData, Product, SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Eye, Pen, Plus } from 'lucide-react';

type ProductIndexProps = { products: PaginationData<Product>; categories: FormatterObject[] } & SharedData;

const ProductIndex = () => {
    const { products, categories, auth } = usePage<ProductIndexProps>().props;

    return (
        <AppLayout>
            <Head title="Articles" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <h2 className="text-base font-semibold">Liste des produits</h2>
                    <div className="my-5 flex items-center justify-between">
                        <SearchInput lenghtData={products.total} urlBack={route('#product.index')} />
                        <ButtonLink dimension="sm" variant="secondary" href={route('#product.create')}>
                            <Plus size={15} />
                        </ButtonLink>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nom</TableHead>
                                <TableHead>Prix</TableHead>
                                <TableHead>Categories</TableHead>
                                <TableHead>Créer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.data.map((product) => {
                                return (
                                    <TableRow key={product.id}>
                                        <TableCell>{truncate(product.name, 40, '...')}</TableCell>
                                        <TableCell>{formatPrice(product.price)}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{product.categories.length}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Moment date={product.created_at} />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <ButtonLink dimension="sm" variant="outline" href={route('#product.edit', { id: product.id })}>
                                                    <Pen size={15} />
                                                </ButtonLink>

                                                <ActionDeleteWithPassword routeDestroy={route('#product.destroy', { id: product.id })} />

                                                <ButtonLink dimension="sm" variant="secondary" href={route('#product.show', { id: product.id })}>
                                                    <Eye size={15} />
                                                </ButtonLink>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <Pagination paginate={products} />
                </div>
            </div>
        </AppLayout>
    );
};

export default ProductIndex;

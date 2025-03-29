import { ActionDeleteWithPassword } from '@/components/action-with-password';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button-link';
import { Pagination } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SearchInput } from '@/shared/search-input';
import { FormatterObject, PaginationData, Stock } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Eye } from 'lucide-react';
import { ModalFormStock } from './modal-form';

type CategoryIndexProps = { stocks: PaginationData<Stock>; products: FormatterObject[] };

const CategoryIndex = () => {
    const { stocks, products } = usePage<CategoryIndexProps>().props;

    return (
        <AppLayout>
            <Head title="Stock" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <h2 className="text-base font-semibold">Liste des stocks</h2>
                    <div className="my-5 flex items-center justify-between">
                        <SearchInput lenghtData={stocks.total} urlBack={route('#stock.index')} />
                        <ModalFormStock product_id={0} stock_value={0} products={products} id={null} />
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Produit</TableHead>
                                <TableHead>Stock</TableHead>
                                <TableHead>Créer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {stocks.data.map((stock) => {
                                return (
                                    <TableRow key={stock.id}>
                                        <TableCell>{truncate(stock.product.name, 100, '...')}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{stock.stock_value}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Moment date={stock.created_at} />
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <ModalFormStock
                                                    products={products}
                                                    stock_value={stock.stock_value}
                                                    product_id={stock.product_id}
                                                    id={stock.id}
                                                />

                                                <ActionDeleteWithPassword routeDestroy={route('#stock.destroy', { id: stock.id })} />

                                                <ButtonLink dimension="sm" variant="secondary" href={route('#stock.show', { id: stock.id })}>
                                                    <Eye size={15} />
                                                </ButtonLink>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <Pagination paginate={stocks} />
                </div>
            </div>
        </AppLayout>
    );
};

export default CategoryIndex;

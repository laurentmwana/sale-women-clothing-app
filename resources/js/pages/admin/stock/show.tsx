import AppLayout from '@/layouts/app-layout';
import { FormatterObject, Stock, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ModalFormStock } from './modal-form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Stocks',
        href: route('#stock.index'),
    },
    {
        title: 'En savoir plus sur un stock',
        href: '',
    },
];

type StockShowProps = { stock: Stock; products: FormatterObject[] };

const StockShow = () => {
    const { stock, products } = usePage<StockShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex items-center justify-between gap-5">
                        <h2 className="text-base font-semibold">{stock.product.name}</h2>
                        <ModalFormStock products={products} stock_value={stock.stock_value} product_id={stock.product_id} id={stock.id} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default StockShow;

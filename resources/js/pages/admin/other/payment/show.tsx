import AppLayout from '@/layouts/app-layout';
import { Payment, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Paiements',
        href: route('#payment.index'),
    },
    {
        title: 'En savoir plus sur un paiement',
        href: '',
    },
];

type PaymentShowProps = { payment: Payment};

const PaymentShow = () => {
    const { payment } = usePage<PaymentShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Utilisateurs" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex items-center justify-between gap-5">
                        <h2 className="text-base font-semibold">{payment.id}</h2>
                   
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default PaymentShow;

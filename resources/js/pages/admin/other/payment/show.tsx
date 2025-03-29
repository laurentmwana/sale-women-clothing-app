import AppLayout from '@/layouts/app-layout';
import { FormatterObject, Payment, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ModalFormPayment } from './modal-form';

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

type PaymentShowProps = { payment: Payment, students: FormatterObject[] };

const PaymentShow = () => {
    const { payment, students } = usePage<PaymentShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Utilisateurs" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex items-center justify-between gap-5">
                        <h2 className="text-base font-semibold">{payment.id}</h2>
                        <ModalFormPayment
                            id={payment.id}
                            students={students}
                            student_id={payment.student_id}
                            deposit_id={payment.deposit_id}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default PaymentShow;

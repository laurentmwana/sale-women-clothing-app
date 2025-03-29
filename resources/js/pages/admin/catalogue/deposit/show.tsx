import AppLayout from '@/layouts/app-layout';
import { Deposit, FormatterObject, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const title = 'En savoir plus sur un dépôt de Tp';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dépôt Travail Pratique',
        href: route('#deposit.index'),
    },
    {
        title,
        href: '',
    },
];

type DepositShowProps = { deposit: Deposit; workPraticals: FormatterObject[]; levels: FormatterObject[] };

const DepositShow = () => {
    const { levels, workPraticals, deposit } = usePage<DepositShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-base font-semibold">{title}</h2>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default DepositShow;

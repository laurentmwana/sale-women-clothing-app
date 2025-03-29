import AppLayout from '@/layouts/app-layout';
import { Deposit, FormatterObject, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { DepositForm } from './deposit-form';

const title = "Edition d'un dépôt de Tp";

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

type DepositEditProps = { deposit: Deposit; workPraticals: FormatterObject[]; levels: FormatterObject[] };

const DepositEdit = () => {
    const { levels, workPraticals, deposit } = usePage<DepositEditProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-base font-semibold">{title}</h2>

                        <DepositForm
                            id={deposit.id}
                            level_id={deposit.level_id}
                            work_pratical_id={deposit.work_pratical_id}
                            start_at={deposit.start_at}
                            end_at={deposit.end_at}
                            price={deposit.price}
                            levels={levels}
                            workPraticals={workPraticals}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default DepositEdit;

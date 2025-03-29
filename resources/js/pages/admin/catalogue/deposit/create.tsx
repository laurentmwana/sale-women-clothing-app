import AppLayout from '@/layouts/app-layout';
import { FormatterObject, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { DepositForm } from './deposit-form';

const title = "Création d'un dépôt de Tp";

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

type DepositCreateProps = { workPraticals: FormatterObject[]; levels: FormatterObject[] } & SharedData;

const DepositCreate = () => {
    const { levels, workPraticals } = usePage<DepositCreateProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-base font-semibold">{title}</h2>

                        <DepositForm
                            id={null}
                            level_id={0}
                            work_pratical_id={0}
                            start_at=""
                            end_at=""
                            price={0}
                            levels={levels}
                            workPraticals={workPraticals}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default DepositCreate;

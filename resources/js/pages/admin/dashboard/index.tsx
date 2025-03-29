import { ChartGraphic } from '@/components/ui/chart-graphic';
import { ChartSimple } from '@/components/ui/chart-simple';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tableau de bord',
        href: route('dashboard'),
    },
];

const DashboardIndex = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tableau de bord" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <h2 className="mb-4 text-base font-semibold">Tableau de bord</h2>

                    <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <ChartSimple label="Université" dataValue={12} />
                        <ChartSimple label="Option" dataValue={3} />
                        <ChartSimple label="Promotion" dataValue={60} />
                        <ChartSimple label="Etudiant" dataValue={50} />
                    </div>

                    <div className="grid grid-cols-1">
                        <ChartGraphic />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default DashboardIndex;

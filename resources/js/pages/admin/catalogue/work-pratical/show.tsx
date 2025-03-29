import AppLayout from '@/layouts/app-layout';
import { WorkPratical, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Travaux pratiques',
        href: route('#work-pratical.index'),
    },
    {
        title: 'En savoir plus sur un travail pratique',
        href: '',
    },
];

type WorkPraticalShowProps = { workPratical: WorkPratical };

const WorkPraticalShow = () => {
    const { workPratical } = usePage<WorkPraticalShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col items-center gap-5">
                        <h2 className="text-base font-semibold">{workPratical.title}</h2>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default WorkPraticalShow;

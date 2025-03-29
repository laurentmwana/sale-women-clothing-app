import AppLayout from '@/layouts/app-layout';
import { Event, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Eventments',
        href: route('#event.index'),
    },
    {
        title: 'En savoir plus sur un évènement',
        href: '',
    },
];

type CourseShowProps = { event: Event };

const CourseShow = () => {
    const { event } = usePage<CourseShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Evènements" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex items-center justify-between gap-5">
                        <h2 className="text-base font-semibold">{event.title}</h2>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default CourseShow;

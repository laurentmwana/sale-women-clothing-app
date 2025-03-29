import AppLayout from '@/layouts/app-layout';
import { FormatterObject, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { EventForm } from './event-form';

const title = "Ajout d'évènement";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Eventments',
        href: route('#event.index'),
    },
    {
        title,
        href: '',
    },
];

type EventCreateProps = { types: FormatterObject[] };

const EventCreate = () => {
    const { types } = usePage<EventCreateProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Evènements" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-base font-semibold">{title}</h2>
                        <EventForm id={null} title="" description="" type="" types={types} start_at={''} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default EventCreate;

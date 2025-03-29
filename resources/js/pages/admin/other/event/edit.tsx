import AppLayout from '@/layouts/app-layout';
import { Event, FormatterObject, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { EventForm } from './event-form';

const title = "Edition d'un évènement";

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

type EventEditProps = { event: Event; types: FormatterObject[] };

const EventEdit = () => {
    const { types, event } = usePage<EventEditProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Evènements" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-base font-semibold">{title}</h2>
                        <EventForm
                            id={event.id}
                            title={event.title}
                            description={event.description}
                            type={event.type}
                            types={types}
                            start_at={event.start_at}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default EventEdit;

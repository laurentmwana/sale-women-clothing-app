import AppLayout from '@/layouts/app-layout';
import { FormatterObject, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { WorkPraticalForm } from './work-form';

const title = "Ajout d'un travail pratique";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Travaux pratiques',
        href: route('#work-pratical.index'),
    },
    {
        title,
        href: '',
    },
];

type WorkPraticalCreateProps = { years: FormatterObject[]; courses: FormatterObject[] } & SharedData;

const WorkPraticalCreate = () => {
    const { courses, years } = usePage<WorkPraticalCreateProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-base font-semibold">{title}</h2>

                        <WorkPraticalForm year_academic_id={0} course_id={0} title="" description="" id={null} years={years} courses={courses} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default WorkPraticalCreate;

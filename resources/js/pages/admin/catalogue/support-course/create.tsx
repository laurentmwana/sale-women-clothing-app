import AppLayout from '@/layouts/app-layout';
import { FormatterObject, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { SupportForm } from './support-form';

const title = "Ajout d'un support de cours";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Support de cours',
        href: route('#support-course.index'),
    },
    {
        title,
        href: '',
    },
];

type SupportCourseCreateProps = { years: FormatterObject[]; courses: FormatterObject[] } & SharedData;

const SupportCourseCreate = () => {
    const { courses, years } = usePage<SupportCourseCreateProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-base font-semibold">{title}</h2>

                        <SupportForm year_academic_id={0} course_id={0} title="" description="" id={null} years={years} courses={courses} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default SupportCourseCreate;

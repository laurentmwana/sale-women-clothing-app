import AppLayout from '@/layouts/app-layout';
import { University, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ModalFormUniversity } from './modal-form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Universités',
        href: route('#university.index'),
    },
    {
        title: 'En savoir plus sur une université',
        href: '',
    },
];

type UniversityShowProps = { university: University };

const UniversityShow = () => {
    const { university } = usePage<UniversityShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex items-center justify-between gap-5">
                        <h2 className="text-base font-semibold">{university.name}</h2>
                        <ModalFormUniversity name={university.name} alias={university.alias} id={university.id} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default UniversityShow;

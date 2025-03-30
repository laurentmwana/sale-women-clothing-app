import { BaseLayout } from '@/layouts/base-layout';
import { SectionHeaderPage } from '@/shared/section-page';
import { FormatterObject } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ClientForm } from './client-form';

const title = 'Complètez vos informations';

type NoEmptyStudentIndexProps = { genders: FormatterObject[] };

const NoEmptyStudentIndex = () => {
    const { genders } = usePage<NoEmptyStudentIndexProps>().props;

    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container py-12">
                <div className="container-center">
                    <SectionHeaderPage title={title}>
                        Bienvenue parmi nous ! Pour finaliser votre inscription et profiter pleinement de notre site, nous vous invitons à compléter
                        vos informations. Cela nous permettra de mieux vous connaître et de vous offrir une expérience personnalisée.
                    </SectionHeaderPage>

                    <div className="container-card max-w-3xl">
                        <ClientForm genders={genders} />
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};
export default NoEmptyStudentIndex;

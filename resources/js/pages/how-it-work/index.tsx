import { BaseLayout } from '@/layouts/base-layout';
import { SectionHeaderPage } from '@/shared/section-page';
import { Head } from '@inertiajs/react';

const title = 'Comment ça marche';

type HowItWorkIndexProps = {};

const HowItWorkIndex = () => {
    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container py-12">
                <div className="container-center">
                    <SectionHeaderPage title={title}>
                        Accédez à une bibliothèque de syllabus de qualité pour enrichir vos connaissances et structurer votre parcours académique.
                        Profitez d’un accès libre, que vous soyez étudiant, enseignant ou passionné de savoir.
                    </SectionHeaderPage>
                </div>
            </div>
        </BaseLayout>
    );
};
export default HowItWorkIndex;

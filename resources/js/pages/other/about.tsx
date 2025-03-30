import { BaseLayout } from '@/layouts/base-layout';
import { SectionHeaderPage } from '@/shared/section-page';
import { Head } from '@inertiajs/react';

const About = () => {
    const title = `A propos `;

    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container-doshed">
                <div className="container py-12">
                    <div className="container-center">
                        <SectionHeaderPage title={title}>
                            Découvrez les articles récents, offrant des analyses, des réflexions et des informations à jour pour enrichir vos
                            connaissances. Restez informé des dernières tendances et approfondissez vos sujets d'intérêt.
                        </SectionHeaderPage>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default About;

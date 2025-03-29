import { BaseLayout } from '@/layouts/base-layout';
import type { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { SectionAbout } from './section-about';
import { SectionHero } from './section-hero';

type WelcomeIndexProps = {};

const WelcomeIndex = () => {
    const { auth } = usePage<SharedData & WelcomeIndexProps>().props;

    return (
        <BaseLayout>
            <Head title="Accueil" />
            <div className="container-doshed">
                <SectionHero />
                <SectionAbout />
            </div>
        </BaseLayout>
    );
};

export default WelcomeIndex;

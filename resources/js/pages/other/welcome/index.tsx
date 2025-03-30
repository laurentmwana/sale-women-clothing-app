import { BaseLayout } from '@/layouts/base-layout';
import type { Product, SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { SectionHero } from './section-hero';
import { SectionProduct } from './section-product';
import { SectionFaq } from './section-quiz';

type WelcomeIndexProps = { products: Product[] };

const WelcomeIndex = ({ products }: WelcomeIndexProps) => {
    const { auth } = usePage<SharedData & WelcomeIndexProps>().props;

    return (
        <BaseLayout>
            <Head title="Accueil" />
            <div className="container-doshed">
                <SectionHero />
                <SectionProduct products={products} />
                <SectionFaq />
            </div>
        </BaseLayout>
    );
};

export default WelcomeIndex;

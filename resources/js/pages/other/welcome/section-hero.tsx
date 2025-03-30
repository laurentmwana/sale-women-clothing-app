import { ButtonLink } from '@/components/ui/button-link';

export const SectionHero = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <h1 className="mb-4 text-4xl leading-none font-extrabold tracking-tight md:text-5xl lg:text-6xl">Vetement Femme</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">
                Découvrez notre toute nouvelle collection, spécialement conçue pour la femme moderne qui recherche à la fois élégance, confort et
                durabilité. Laissez-vous séduire par des pièces uniques, aux coupes raffinées et aux matières de qualité.
            </p>
            <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
                <ButtonLink
                    variant="secondary"
                    href={route('product.index')}
                    className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium"
                >
                    Découvrir la Collection
                </ButtonLink>

                <ButtonLink
                    variant="outline"
                    href={route('other.about')}
                    className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium"
                >
                    En savoir plus
                </ButtonLink>
            </div>
        </div>
    );
};

import FlashMessage from '@/components/flash-message';
import { NavbarBase } from '@/components/nav-base';
import { NetworkSocial } from '@/shared/network-social';
import { ScrollTopButton } from '@/shared/scroll-top-button';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export const BaseLayout = ({ children }: PropsWithChildren) => {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <FlashMessage />

            <NavbarBase />

            <main>{children}</main>

            <ScrollTopButton />

            <div className="container pt-[100px]">
                <footer className="py-8" id="footer">
                    <div className="container-center">
                        <div className="container-center grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-100">Femme Vétement</h2>
                                <p className="text-description mb-4">
                                    Ce site a été réalisé dans le cadre d'un travail pratique du cours de Programmation Web 2. Ce cours, dispensé par
                                    le professeur Kuyunsa Pierre.
                                </p>

                                <NetworkSocial />
                            </div>
                            <div className="flex md:justify-end">
                                <div>
                                    <h2 className="mb-4 text-xl font-semibold">Nous contacter</h2>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href={''} className="flex gap-x-2 hover:underline">
                                                <i className="bi bi-envelope text-blue-500 hover:text-blue-600"></i>
                                                <span className="text-muted-foreground">Par e-mail</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="https://api.whatsapp.com/send/?phone=243829760292&text&type=phone_number&app_absent=0"
                                                className="flex gap-x-2 hover:underline"
                                            >
                                                <i className="bi bi-whatsapp text-green-500 hover:text-green-600"></i>
                                                <span className="text-muted-foreground">Par Whatsapp</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-sm text-gray-600">&copy; Femme Vétement {new Date().getFullYear()}</p>
                </footer>
            </div>
        </>
    );
};

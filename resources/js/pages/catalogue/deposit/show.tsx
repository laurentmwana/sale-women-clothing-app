import { BaseLayout } from '@/layouts/base-layout';
import { SectionHeaderPage } from '@/shared/section-page';
import { Deposit } from '@/types';
import { Head, usePage } from '@inertiajs/react';

type DepositShowProps = { deposit: Deposit };

const DepositShow = () => {
    const { deposit } = usePage<DepositShowProps>().props;

    const title = `En savoir plus sur le dépôt #${deposit.id}`;
    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container py-12">
                <div className="container-center">
                    <SectionHeaderPage title={title}>
                        Vous avez un problème technique ? Vous souhaitez envoyer des commentaires sur une fonctionnalité bêta ? Besoin de détails sur
                        notre plan Business ? Faites le nous savoir.
                    </SectionHeaderPage>
                </div>
            </div>
        </BaseLayout>
    );
};
export default DepositShow;

import { Pagination } from '@/components/ui/pagination';
import { BaseLayout } from '@/layouts/base-layout';
import { SectionHeaderPage } from '@/shared/section-page';
import { Deposit, PaginationData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { DepositItem } from './item';

const title = 'Dépôt';

type DepositIndexProps = { deposits: PaginationData<Deposit> };

const DepositIndex = () => {
    const { deposits } = usePage<DepositIndexProps>().props;

    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container py-12">
                <div className="container-center">
                    <SectionHeaderPage title={title}>
                        Explorez des exercices pratiques pour mettre en application vos connaissances et développer vos compétences. Ces ressources
                        sont conçues pour renforcer votre apprentissage de manière concrète et interactive.
                    </SectionHeaderPage>

                    <div className="mb-6 grid grid-cols-1 gap-3">
                        {deposits.data.map((deposit) => (
                            <DepositItem key={deposit.id} deposit={deposit} />
                        ))}
                    </div>

                    <Pagination paginate={deposits} />
                </div>
            </div>
        </BaseLayout>
    );
};
export default DepositIndex;

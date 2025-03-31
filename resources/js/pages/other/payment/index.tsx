import { BaseLayout } from '@/layouts/base-layout';
import type { Card, PaginationData, Product, SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { PaymentCard } from './payment-card';
import { Pagination } from '@/components/ui/pagination';
import { SectionHeaderPage } from '@/shared/section-page';

type PaymentIndexProps = { cards: PaginationData<Card> };

const title  = "Mes paiements"

const PaymentIndex = () => {
    const { cards } = usePage<SharedData & PaymentIndexProps>().props;

    return (
        <BaseLayout>
            <Head title={title} />
               <div className="container py-12">
                <div className="container-center">
                    <SectionHeaderPage title={title}>
                    Ici, vous pouvez consulter l'historique de vos paiements, vérifier l'état 
                    de vos transactions et suivre les paiements effectués pour vos produits ou 
                    services. 
                    </SectionHeaderPage>
                    <div className="grid grid-cols-1 gap-4">
                        {cards.data.map(c => <PaymentCard key={c.id} card={c} />)}
                    </div>
                    <Pagination paginate={cards} />
                </div>
            </div>
        </BaseLayout>
    );
};

export default PaymentIndex;

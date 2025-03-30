import { ChartRadian } from '@/components/ui/chart-radian';
import { ChartSimple } from '@/components/ui/chart-simple';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tableau de bord',
        href: route('dashboard'),
    },
];

type DashboardIndexProps = {
    countClient: number;
    countUser: number;
    countProduct: number;
    countStock: number;
    sumPrices: number;
    countPaymentFail?: number;
    countPaymentSuccess?: number;
};

const DashboardIndex = ({
    countClient,
    countProduct,
    countStock,
    countUser,
    sumPrices,
    countPaymentFail,
    countPaymentSuccess,
}: DashboardIndexProps) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tableau de bord" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <h2 className="mb-4 text-base font-semibold">Tableau de bord</h2>

                    <div className="lg:grid-cols3 mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <ChartSimple label="Produit" dataValue={countProduct || 0} />
                        <ChartSimple label="Client" dataValue={countClient || 0} />
                        <ChartSimple label="Stock" dataValue={countStock || 0} />
                        <ChartSimple label="Utilisateur" dataValue={countUser || 0} />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <ChartRadian countData={countPaymentFail || 0} title="Paiement Echoué" />
                        <ChartRadian countData={sumPrices || 0} title="L'argent déjà reçu" alias="Fc" />
                        <ChartRadian countData={countPaymentSuccess || 0} title="Paiement Réçu" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default DashboardIndex;

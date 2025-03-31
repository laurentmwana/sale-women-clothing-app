import { ActionDeleteWithPassword } from '@/components/action-with-password';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button-link';
import { Pagination } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { formatPriceFixed, truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SearchInput } from '@/shared/search-input';
import { FormatterObject, PaginationData, Payment } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Eye } from 'lucide-react';

type PaymentIndexProps = { payments: PaginationData<Payment>;  };

const PaymentIndex = () => {
    const { payments } = usePage<PaymentIndexProps>().props;

    return (
        <AppLayout>
            <Head title="Paiement" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <h2 className="text-base font-semibold">Paiement</h2>
                    <div className="my-5 flex items-center justify-between">
                        <SearchInput lenghtData={payments.total} urlBack={route('#payment.index')} />
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Créer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payments.data.map((payment) => {
                                return (
                                    <TableRow key={payment.id}>
                                        <TableCell>{truncate(payment.client.name, 100, '...')}</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">{payment.status}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            {formatPriceFixed(payment.amount)} Fc
                                        </TableCell>
                                        <TableCell>
                                            <Moment date={payment.created_at} />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <ButtonLink dimension="sm" variant="secondary" href={route('#payment.show', { id: payment.id })}>
                                                    <Eye size={15} />
                                                </ButtonLink>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <Pagination paginate={payments} />
                </div>
            </div>
        </AppLayout>
    );
};

export default PaymentIndex;

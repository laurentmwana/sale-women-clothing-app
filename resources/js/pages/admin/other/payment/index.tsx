import { ActionDeleteWithPassword } from '@/components/action-with-password';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button-link';
import { Pagination } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SearchInput } from '@/shared/search-input';
import { FormatterObject, PaginationData, Payment } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Eye } from 'lucide-react';
import { ModalFormPayment } from './modal-form';

type PaymentIndexProps = { payments: PaginationData<Payment>; students: FormatterObject[] };

const PaymentIndex = () => {
    const { payments, students } = usePage<PaymentIndexProps>().props;

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
                                <TableHead>Etudiant</TableHead>
                                <TableHead>Paiement</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Dépôt</TableHead>
                                <TableHead>Créer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payments.data.map((payment) => {
                                return (
                                    <TableRow key={payment.id}>
                                        <TableCell>{truncate(payment.student.full_name, 100, '...')}</TableCell>
                                        <TableCell>{truncate(payment.mobile_money_name, 30, '...')}</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">{payment.status}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Link className="hover:underline" href={route('#deposit.show', { id: payment.deposit_id })}>
                                                Dépôt N° {payment.deposit.token}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Moment date={payment.created_at} />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <ModalFormPayment
                                                    id={payment.id}
                                                    students={students}
                                                    student_id={payment.student_id}
                                                    deposit_id={payment.deposit_id}
                                                />

                                                <ActionDeleteWithPassword routeDestroy={route('#payment.destroy', { id: payment.id })} />

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

import { ActionDeleteWithPassword } from '@/components/action-with-password';
import { ButtonLink } from '@/components/ui/button-link';
import { Pagination } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SearchInput } from '@/shared/search-input';
import { Deposit, FormatterObject, PaginationData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Eye, Pen, Plus } from 'lucide-react';
import { ModalFormPayment } from '../../other/payment/modal-form';

type DepositIndexProps = {
    deposits: PaginationData<Deposit>;
    students: FormatterObject[];
};

const DepositIndex = () => {
    const { deposits, students } = usePage<DepositIndexProps>().props;

    return (
        <AppLayout>
            <Head title="Dépôt Travail Pratique" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <h2 className="text-base font-semibold">Dépôts</h2>
                    <div className="my-5 flex items-center justify-between">
                        <SearchInput lenghtData={deposits.total} urlBack={route('#deposit.index')} />
                        <ButtonLink href={route('#deposit.create')} dimension="sm" variant="secondary">
                            <Plus size={15} />
                        </ButtonLink>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Travail Pratique</TableHead>
                                <TableHead>Année académique</TableHead>
                                <TableHead>Promotion</TableHead>
                                <TableHead>Prix</TableHead>
                                <TableHead>Créer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {deposits.data.map((deposit) => {
                                return (
                                    <TableRow key={deposit.id}>
                                        <TableCell>
                                            <Link href={route('#work-pratical.show', { id: deposit.work_pratical.id })}>
                                                {truncate(deposit.work_pratical.title, 30, '...')}
                                            </Link>
                                        </TableCell>

                                        <TableCell>
                                            <Link href={route('#year-academic.index', { year: deposit.year_academic.id })}>
                                                {truncate(deposit.year_academic.name, 30, '...')}
                                            </Link>
                                        </TableCell>

                                        <TableCell>
                                            <Link href={route('#level.show', { id: deposit.level.id })}>
                                                {truncate(deposit.level.name, 30, '...')}
                                            </Link>
                                        </TableCell>

                                        <TableCell>{deposit.price} Fc</TableCell>

                                        <TableCell>
                                            <Moment date={deposit.created_at} />
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <ButtonLink href={route('#deposit.edit', { id: deposit.id })} dimension="sm" variant="secondary">
                                                    <Pen size={15} />
                                                </ButtonLink>
                                                <ActionDeleteWithPassword routeDestroy={route('#deposit.destroy', { id: deposit.id })} />

                                                <ButtonLink dimension="sm" variant="secondary" href={route('#deposit.show', { id: deposit.id })}>
                                                    <Eye size={15} />
                                                </ButtonLink>

                                                <ModalFormPayment
                                                    id={null}
                                                    students={students}
                                                    student_id={0}
                                                    deposit_id={deposit.id}
                                                />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <Pagination paginate={deposits} />
                </div>
            </div>
        </AppLayout>
    );
};

export default DepositIndex;

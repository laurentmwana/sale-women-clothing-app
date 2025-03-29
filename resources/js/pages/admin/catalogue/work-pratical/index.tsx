import { ActionDeleteWithPassword } from '@/components/action-with-password';
import { ButtonLink } from '@/components/ui/button-link';
import { Pagination } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SearchInput } from '@/shared/search-input';
import { PaginationData, WorkPratical } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Eye, Pen, Plus } from 'lucide-react';

type WorkpraticalIndexProps = { workPraticals: PaginationData<WorkPratical> };

const WorkpraticalIndex = () => {
    const { workPraticals } = usePage<WorkpraticalIndexProps>().props;

    return (
        <AppLayout>
            <Head title="Articles" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <h2 className="text-base font-semibold">Liste des travaux pratiques</h2>
                    <div className="my-5 flex items-center justify-between">
                        <SearchInput lenghtData={workPraticals.total} urlBack={route('#work-pratical.index')} />

                        <ButtonLink href={route('#work-pratical.create')} dimension="sm" variant="secondary">
                            <Plus size={15} />
                        </ButtonLink>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Titre</TableHead>
                                <TableHead>Cours</TableHead>
                                <TableHead>Année académique</TableHead>
                                <TableHead>Créer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {workPraticals.data.map((workPratical) => {
                                return (
                                    <TableRow key={workPratical.id}>
                                        <TableCell>{truncate(workPratical.title, 30, '...')}</TableCell>
                                        <TableCell>
                                            <Link href={route('#course.show', { id: workPratical.course.id })}>
                                                {truncate(workPratical.course.name, 30, '...')}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={`${route('#year-academic.index')}#${workPratical.year_academic.name}`}>
                                                {truncate(workPratical.year_academic.name, 10, '...')}
                                            </Link>
                                        </TableCell>

                                        <TableCell>
                                            <Moment date={workPratical.created_at} />
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <ButtonLink
                                                    href={route('#work-pratical.edit', { id: workPratical.id })}
                                                    dimension="sm"
                                                    variant="secondary"
                                                >
                                                    <Pen size={15} />
                                                </ButtonLink>
                                                <ActionDeleteWithPassword routeDestroy={route('#work-pratical.destroy', { id: workPratical.id })} />

                                                <ButtonLink
                                                    dimension="sm"
                                                    variant="secondary"
                                                    href={route('#work-pratical.show', { id: workPratical.id })}
                                                >
                                                    <Eye size={15} />
                                                </ButtonLink>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <Pagination paginate={workPraticals} />
                </div>
            </div>
        </AppLayout>
    );
};

export default WorkpraticalIndex;

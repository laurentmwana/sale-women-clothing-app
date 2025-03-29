import { ActionDeleteWithPassword } from '@/components/action-with-password';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button-link';
import { Pagination } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SearchInput } from '@/shared/search-input';
import { PaginationData, University } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Eye } from 'lucide-react';
import { ModalFormUniversity } from './modal-form';

type UniversityIndexProps = { universities: PaginationData<University> };

const UniversityIndex = () => {
    const { universities } = usePage<UniversityIndexProps>().props;

    return (
        <AppLayout>
            <Head title="Universités" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <h2 className="text-base font-semibold">Liste des universités</h2>
                    <div className="my-5 flex items-center justify-between">
                        <SearchInput lenghtData={universities.total} urlBack={route('#university.index')} />
                        <ModalFormUniversity alias="" name="" id={null} />
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nom</TableHead>
                                <TableHead>Alias</TableHead>
                                <TableHead>Options</TableHead>
                                <TableHead>Créer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {universities.data.map((university) => {
                                return (
                                    <TableRow key={university.id}>
                                        <TableCell>{truncate(university.name, 100, '...')}</TableCell>
                                        <TableCell>{truncate(university.alias, 20, '...')}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{university.options.length}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Moment date={university.created_at} />
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <ModalFormUniversity name={university.name} alias={university.alias} id={university.id} />
                                                <ActionDeleteWithPassword routeDestroy={route('#university.destroy', { id: university.id })} />

                                                <ButtonLink
                                                    dimension="sm"
                                                    variant="secondary"
                                                    href={route('#university.show', { id: university.id })}
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
                    <Pagination paginate={universities} />
                </div>
            </div>
        </AppLayout>
    );
};

export default UniversityIndex;

import { ActionDeleteWithPassword } from '@/components/action-with-password';
import { ButtonLink } from '@/components/ui/button-link';
import { Pagination } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SearchInput } from '@/shared/search-input';
import { Event, PaginationData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Eye, Pen, Plus } from 'lucide-react';

type EventIndexProps = { events: PaginationData<Event> };

const EventIndex = () => {
    const { events } = usePage<EventIndexProps>().props;

    return (
        <AppLayout>
            <Head title="Levels" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <h2 className="text-base font-semibold">Liste des évènements</h2>
                    <div className="my-5 flex items-center justify-between">
                        <SearchInput lenghtData={events.total} urlBack={route('#event.index')} />
                        <ButtonLink href={route('#event.create')} dimension="sm" variant="secondary">
                            <Plus size={15} />
                        </ButtonLink>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Titre</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Début</TableHead>
                                <TableHead>Créer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {events.data.map((event) => {
                                return (
                                    <TableRow key={event.id}>
                                        <TableCell>{truncate(event.title, 100, '...')}</TableCell>
                                        <TableCell>{truncate(event.type, 20, '...')}</TableCell>
                                        <TableCell>{event.start_at}</TableCell>
                                        <TableCell>
                                            <Moment date={event.created_at} />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <ButtonLink href={route('#event.edit', { id: event.id })} dimension="sm" variant="secondary">
                                                    <Pen size={15} />
                                                </ButtonLink>
                                                <ActionDeleteWithPassword routeDestroy={route('#event.destroy', { id: event.id })} />

                                                <ButtonLink dimension="sm" variant="secondary" href={route('#event.show', { id: event.id })}>
                                                    <Eye size={15} />
                                                </ButtonLink>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <Pagination paginate={events} />
                </div>
            </div>
        </AppLayout>
    );
};

export default EventIndex;

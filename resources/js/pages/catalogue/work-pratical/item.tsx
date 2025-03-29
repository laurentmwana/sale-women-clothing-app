import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ButtonLink } from '@/components/ui/button-link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import type { WorkPratical } from '@/types';
import { BookOpen, CalendarIcon, Download, Info } from 'lucide-react';

type WorkPraticalItemProps = {
    workPratical: WorkPratical;
};

export const WorkPraticalItem = ({ workPratical }: WorkPraticalItemProps) => {
    return (
        <Card key={workPratical.id} className="group w-full max-w-md overflow-hidden transition-all duration-200 hover:shadow-md">
            <CardHeader className="bg-muted/20 space-y-2 pb-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                        <CardTitle className="text-xl font-bold">{truncate(workPratical.title, 50, '...')}</CardTitle>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1 font-medium">TP</Badge>
                </div>
            </CardHeader>

            <CardContent className="pt-4 pb-2">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-y-2">
                    <div className="bg-primary/5 flex items-center gap-2 rounded-full px-3 py-1.5">
                        <BookOpen className="text-primary h-4 w-4" />
                        <span className="text-sm font-medium">{workPratical.course.name}</span>
                    </div>
                    <div className="bg-primary/5 flex items-center gap-2 rounded-full px-3 py-1.5">
                        <CalendarIcon className="text-primary h-4 w-4" />
                        <span className="text-sm">{workPratical.year_academic.name}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="bg-background/50 flex flex-col items-start border-t pt-3 pb-3">
                <div className="text-muted-foreground mb-3 flex w-full justify-between text-xs">
                    <div className="flex items-center gap-1">
                        <Moment placeholder="Créer" date={workPratical.created_at} />
                    </div>
                    <div className="flex items-center gap-1">
                        <Moment placeholder="Modifié" date={workPratical.created_at} />
                    </div>
                </div>

                <div className="flex w-full justify-between gap-2">
                    <Button variant="outline" size="sm" className="hover:bg-muted/50 gap-1.5 transition-all">
                        <Info className="h-4 w-4" />
                        Details
                    </Button>

                    <ButtonLink
                        preloader={false}
                        variant="outline"
                        dimension="default"
                        href={route('download.work-pratical', { id: workPratical.id })}
                    >
                        <Download size={15} />
                        <span>Télécharger</span>
                    </ButtonLink>
                </div>
            </CardFooter>
        </Card>
    );
};

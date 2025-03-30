import { ActionWithPassword } from '@/components/action-with-password';
import { Button } from '@/components/ui/button';
import { Card } from '@/types';
import { DollarSignIcon } from 'lucide-react';

type CardActionProps = { card: Card };

export const CardAction = ({ card }: CardActionProps) => {
    return (
        <ActionWithPassword
            trigger={
                <Button variant="secondary" size="sm" className="flex items-center gap-2">
                    <DollarSignIcon size={15} />
                    <span>Effectuer le paiement</span>
                </Button>
            }
            routeAction=""
            title="Confirmation pour le paiement"
        />
    );
};

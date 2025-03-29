import { Payment } from '@/types';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { ButtonLink } from '@/components/ui/button-link';
import { PAYMENT_STATE } from '@/lib/enum';
import { CheckCheck, LucideShoppingCart } from 'lucide-react';

type PaidActionProps = { payment: Payment };

export const PaidAction = ({ payment }: PaidActionProps) => {
    const isSuccess = payment.status === PAYMENT_STATE.SUCCESS;

    const isWritable = payment.year_academic_id !== null && payment.level_id !== null;

    return isWritable ? (
        <ButtonLink preloader={false} href={route('paid.success', { id: payment.id })} dimension="sm" variant="secondary">
            {isSuccess ? (
                <>
                    <CheckCheck className="text-green-400" size={15} />
                    <span className="text-green-400">Acheté</span>
                </>
            ) : (
                <>
                    <LucideShoppingCart size={15} />
                    Acheter
                </>
            )}
        </ButtonLink>
    ) : (
        <Alert variant="destructive">
            <AlertDescription>Vous devez indiquer votre année académique et votre promotion.</AlertDescription>
        </Alert>
    );
};

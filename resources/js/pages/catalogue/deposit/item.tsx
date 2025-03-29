import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Deposit } from '@/types';

type DepositItemProps = { deposit: Deposit };

export const DepositItem = ({ deposit }: DepositItemProps) => {
    return (
        <Card>
            <CardContent className="pt-5">
                <div className="mb-3 flex items-center justify-between gap-4">
                    <Badge variant="outline">
                        du {deposit.start_at} au {deposit.end_at}
                    </Badge>

                    <Badge variant="secondary">{deposit.price}Fc</Badge>
                </div>

                <h2></h2>
            </CardContent>
        </Card>
    );
};

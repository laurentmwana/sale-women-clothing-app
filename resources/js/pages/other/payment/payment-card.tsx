import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { formatPriceFixed } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { Card as CardType } from '@/types';

export const PaymentCard = ({ card }: { card: CardType }) => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    return (
        <Card className="border-t-primary overflow-hidden border-t-4">
            <CardContent className="p-5">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium">#{card.id}</h3>
                    <Badge variant={card.buy ? 'secondary' : 'destructive'} className="rounded-full px-3">
                        {card.buy ? 'payé' : 'pas payé'}
                    </Badge>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Client</span>
                        <span className="font-medium">{card.client.name}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Montant</span>
                        <span className="font-medium">{formatPriceFixed(card.payment.amount)} Fc</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <Badge variant="outline" className="font-normal">
                            {card.payment.status}
                        </Badge>
                    </div>

                    <div className="pt-2">
                        <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="flex h-auto w-full justify-between p-0">
                                    <span className="text-muted-foreground">Products ({card.products.length})</span>
                                    {isProductsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pt-2">
                                <ul className="space-y-1 text-sm">
                                    {card.products.map((product) => (
                                        <li key={product.id} className="flex items-center justify-between py-1">
                                            <span>{product.name}</span>
                                            <span>${product.price.toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>

                <div className="text-muted-foreground mt-4 flex justify-between border-t pt-3 text-xs">
                    <Moment date={card.created_at} />
                </div>
            </CardContent>
        </Card>
    );
};

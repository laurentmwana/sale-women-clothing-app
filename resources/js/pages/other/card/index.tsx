import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BaseLayout } from '@/layouts/base-layout';
import { productTotal, truncate } from '@/lib/utils';
import { Moment } from '@/shared/moment';
import { SectionHeaderPage } from '@/shared/section-page';
import { Card } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { CardAction } from './card-action';

type CardIndexProps = { card: Card | null };

const CardIndex = () => {
    const { card } = usePage<CardIndexProps>().props;

    const title = `Mon panier`;

    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container-doshed">
                <div className="container py-12">
                    <div className="container-center">
                        <SectionHeaderPage title={title}>
                            Votre panier est l'endroit où vous pouvez retrouver tous les produits que vous avez sélectionnés avant de passer votre
                            commande.
                        </SectionHeaderPage>

                        {card ? (
                            <>
                                <div className="container-card mb-4">
                                    <p className="mb-3 text-sm">
                                        Client : {card.client.name} {card.client.firstname}
                                    </p>
                                    <p className="mb-3 text-sm">Total : {productTotal(card.products)} Fc</p>
                                    <p className="mb-5 text-sm">Status du paiement : {card.payment.status}</p>

                                    <CardAction card={card} />
                                </div>
                                <div>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Produit</TableHead>
                                                <TableHead>Prix</TableHead>
                                                <TableHead>Stock</TableHead>
                                                <TableHead></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {card.products.map((product) => {
                                                return (
                                                    <TableRow key={product.id}>
                                                        <TableCell>{truncate(product.name, 100, '...')}</TableCell>
                                                        <TableCell>{product.price.toFixed(2)} Fc</TableCell>
                                                        <TableCell>
                                                            <Badge variant="outline">{product.stock?.stock_value}</Badge>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Moment date={product.created_at} />
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </div>
                            </>
                        ) : (
                            <Alert variant="destructive">
                                <AlertTitle>Message</AlertTitle>
                                <AlertDescription>
                                    Le panier est vide, ajoute les produits dans le panier, puis revenez ici pour effectué le paiement.
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default CardIndex;

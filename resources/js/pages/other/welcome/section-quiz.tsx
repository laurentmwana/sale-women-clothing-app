import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SectionPageTitle } from '@/shared/section-page';

const faqData = [
    {
        id: 'item-1',
        question: 'Comment puis-je connaître ma taille exacte?',
        answer: 'Vous pouvez consulter notre guide des tailles dans la section "Guide des tailles". Nous vous recommandons de prendre vos mesures et de les comparer avec notre tableau. Si vous hésitez entre deux tailles, nous vous conseillons de prendre la taille supérieure.',
    },
    {
        id: 'item-2',
        question: 'Quels sont les délais de livraison?',
        answer: 'Nos délais de livraison varient selon votre localisation. En général, comptez 2-3 jours ouvrables pour les grandes villes et 3-5 jours pour les zones rurales. La livraison express est disponible avec un supplément et garantit une livraison sous 24h dans les grandes villes.',
    },
    {
        id: 'item-3',
        question: 'Quelle est votre politique de retour?',
        answer: "Vous disposez de 14 jours à compter de la réception de votre commande pour nous retourner un article. Les articles doivent être dans leur état d'origine, avec les étiquettes et dans leur emballage d'origine. Les frais de retour sont à votre charge sauf en cas d'erreur de notre part.",
    },
    {
        id: 'item-4',
        question: 'Quels matériaux utilisez-vous pour vos vêtements?',
        answer: "Nous privilégions les matériaux de qualité et respectueux de l'environnement. La plupart de nos vêtements sont fabriqués à partir de coton biologique, de lin, de viscose écologique et de polyester recyclé. Vous trouverez la composition exacte dans la description de chaque produit.",
    },
    {
        id: 'item-5',
        question: 'Proposez-vous des réductions pour les achats en gros?',
        answer: 'Oui, nous proposons des tarifs préférentiels pour les achats en gros. Si vous êtes intéressée par un achat de plus de 10 articles identiques, veuillez contacter notre service client à commercial@femmevetement.com pour obtenir un devis personnalisé.',
    },
    {
        id: 'item-6',
        question: 'Comment entretenir mes vêtements FemmeVetement?',
        answer: "Chaque vêtement est accompagné d'instructions d'entretien spécifiques sur l'étiquette. En général, nous recommandons un lavage à basse température (30°C), d'éviter le sèche-linge et de repasser à température modérée. Pour les articles délicats, privilégiez le lavage à la main ou le nettoyage à sec.",
    },
    {
        id: 'item-7',
        question: 'Avez-vous des collections saisonnières?',
        answer: "Oui, nous lançons quatre collections principales par an, correspondant aux saisons. Nous proposons également des mini-collections capsules tout au long de l'année pour des occasions spéciales comme les fêtes ou les vacances d'été. Inscrivez-vous à notre newsletter pour être informée des nouvelles collections.",
    },
    {
        id: 'item-8',
        question: 'Proposez-vous des vêtements pour toutes les morphologies?',
        answer: 'Absolument! Chez FemmeVetement, nous croyons que la mode doit être inclusive. Notre gamme de tailles va du 34 au 52, et nous concevons nos vêtements pour mettre en valeur toutes les morphologies. Nous avons même des collections spécifiques pour les silhouettes petites, grandes ou pulpeuses.',
    },
    {
        id: 'item-9',
        question: 'Comment puis-je suivre ma commande?',
        answer: 'Une fois votre commande expédiée, vous recevrez un email contenant un numéro de suivi. Vous pourrez utiliser ce numéro sur notre site dans la section "Suivi de commande" ou directement sur le site du transporteur. Vous pouvez également consulter l\'état de votre commande dans votre espace client.',
    },
    {
        id: 'item-10',
        question: 'Proposez-vous des cartes cadeaux?',
        answer: "Oui, nous proposons des cartes cadeaux d'une valeur de 50€, 100€ et 200€. Vous pouvez les acheter en ligne et les envoyer par email à la personne de votre choix, ou les recevoir par courrier dans un joli packaging. Les cartes cadeaux sont valables pendant un an à compter de la date d'achat.",
    },
];

export const SectionFaq = () => {
    return (
        <section className="my-16">
            <div className="container">
                <div className="container-center">
                    <SectionPageTitle title="Questions Fréquentes">
                        Découvrez les articles récents, offrant des analyses, des réflexions et des informations à jour pour enrichir vos
                        connaissances. Restez informé des dernières tendances et approfondissez vos sujets d'intérêt.
                    </SectionPageTitle>

                    <div className="mx-auto max-w-3xl">
                        <Accordion type="single" collapsible className="w-full">
                            {faqData.map((faq) => (
                                <AccordionItem className="mb-5 rounded-md border px-3 shadow-sm" key={faq.id} value={faq.id}>
                                    <AccordionTrigger className="text-base font-medium">{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

import { BaseLayout } from '@/layouts/base-layout';
import { Head } from '@inertiajs/react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const title = `À propos `;

export const AboutSection = () => {
    return (
        <div>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm">
                        Ce site a été réalisé dans le cadre d'un travail pratique du cours de Programmation Web 2. Ce cours, dispensé par le
                        professeur Kuyunsa Pierre et assisté par Benjamin Mupi, a pour objectif de permettre aux étudiants d'acquérir des compétences
                        avancées dans la conception et le développement d'applications web modernes.
                    </p>

                    <p className="text-sm">
                        L'objectif principal de ce projet est de mettre en pratique les notions théoriques et les compétences techniques enseignées au
                        cours des séances. Les étudiants sont encouragés à appliquer les concepts liés aux technologies web actuelles tout en
                        développant un projet concret, fonctionnel et bien structuré.
                    </p>

                    <p className="text-sm">
                        Ce site représente une mise en application des connaissances acquises, notamment en matière de gestion de contenu dynamique,
                        de manipulation de bases de données et d'interaction utilisateur. En réalisant ce projet, les étudiants renforcent leur
                        maîtrise des frameworks modernes, des bonnes pratiques de développement et des outils collaboratifs.
                    </p>

                    <p className="text-sm">
                        Le professeur Kuyunsa Pierre, fort de son expérience et de son expertise en développement web, guide les étudiants dans la
                        mise en œuvre des concepts avancés. De son côté, Benjamin Mupi, en tant qu'assistant, apporte un accompagnement technique et
                        pédagogique pour assurer la bonne compréhension des notions abordées.
                    </p>

                    <p className="text-sm">
                        Ce projet est aussi une occasion pour les étudiants de travailler en équipe, de gérer des défis techniques et de livrer une
                        application conforme aux exigences du cours. Il reflète leur capacité à concevoir des solutions pratiques et innovantes en
                        réponse aux besoins d'un projet web.
                    </p>

                    <p className="text-sm">
                        En somme, ce site est bien plus qu'un simple exercice académique. Il représente un aboutissement des compétences développées
                        au fil du cours et une illustration concrète de l'engagement des étudiants à progresser dans le domaine de la programmation
                        web.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Membres du Groupe</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-sm">
                        Le projet a été réalisé par un groupe de 10 membres, chacun ayant participé activement à la création du site. Voici les
                        membres du groupe :
                    </p>

                    <ol className="list-decimal space-y-1 pl-6 text-sm">
                        <li>
                            <strong>Agnès Mwamba (Présidente)</strong>
                        </li>
                        <li>
                            <strong>Marc Tshibanda</strong>
                        </li>
                        <li>
                            <strong>Sophie Nguema</strong>
                        </li>
                        <li>
                            <strong>Jean-Marc Ilunga</strong>
                        </li>
                        <li>
                            <strong>Claire Mbuyi</strong>
                        </li>
                        <li>
                            <strong>Lucienne Malu</strong>
                        </li>
                        <li>
                            <strong>Koffi Abedi</strong>
                        </li>
                        <li>
                            <strong>Nathalie Tamba</strong>
                        </li>
                        <li>
                            <strong>Benjamin Lelo</strong>
                        </li>
                        <li>
                            <strong>Eric Kabongo</strong>
                        </li>
                    </ol>

                    <p className="mt-4 text-sm">
                        Chaque membre a joué un rôle essentiel dans le succès du projet, assurant une collaboration harmonieuse et un résultat final
                        de qualité.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

const About = () => {
    return (
        <BaseLayout>
            <Head title={title} />

            <div className="container-doshed">
                <div className="container py-12">
                    <div className="container-center">
                        <AboutSection />
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default About;

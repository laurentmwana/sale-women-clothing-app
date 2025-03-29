import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { imageUrl } from '@/lib/utils';
import { SectionPageTitle } from '@/shared/section-page';
import { Link } from '@inertiajs/react';

import { Award, BookOpen, Calendar, Facebook, Github, Globe, GraduationCap, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';

export const ProfessorPortfolio = () => {
    return (
        <div className="">
            {/* Header with background gradient */}

            <div className="relative mb-6 overflow-hidden rounded-t-xl">
                {/* Background with diagonal gradient */}
                <div className="from-primary/90 via-primary/70 to-primary/40 h-48 bg-gradient-to-br sm:h-64"></div>

                {/* Avatar positioned at bottom center, overlapping the gradient */}
                <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform justify-center">
                    <Avatar className="border-background h-36 w-36 border-4 shadow-xl sm:h-44 sm:w-44">
                        <AvatarImage src={imageUrl('tshibanda-pierre.png')} alt="Professor" className="object-cover" />
                        <AvatarFallback className="text-4xl">PR</AvatarFallback>
                    </Avatar>
                </div>

                {/* Optional decorative elements */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-30">
                    <div className="bg-background/10 absolute top-4 right-4 h-24 w-24 rounded-full"></div>
                    <div className="bg-background/10 absolute bottom-12 left-8 h-16 w-16 rounded-full"></div>
                </div>
            </div>

            <Card className="overflow-hidden border-none shadow-lg">
                {/* Name and title section */}
                <div className="bg-background px-4 pt-20 pb-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">Tshibanda Pierre</h1>
                    <div className="text-muted-foreground mt-2 flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Né le 15 mars 1975</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4" />
                        <span>Paris, France</span>
                    </div>
                    <div className="mt-4">
                        <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                            Professeur Titulaire
                        </Badge>
                    </div>
                </div>

                <Separator />

                {/* Social media links */}
                <div className="bg-muted/30 flex justify-center gap-6 py-4">
                    <Link href="#" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
                        <Twitter className="text-primary h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
                        <Linkedin className="text-primary h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
                        <Github className="text-primary h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
                        <Facebook className="text-primary h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
                        <Mail className="text-primary h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                    <Link href="#" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
                        <Globe className="text-primary h-5 w-5" />
                        <span className="sr-only">Website</span>
                    </Link>
                </div>

                <div className="grid gap-8 p-8 md:grid-cols-2">
                    {/* Left column */}
                    <div className="space-y-8">
                        {/* Formation Académique */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <GraduationCap className="text-primary h-6 w-6" />
                                <h2 className="text-2xl font-bold">Formation Académique</h2>
                            </div>
                            <div className="space-y-4 pl-8">
                                <div className="border-primary/20 relative border-l-2 pb-6 pl-6">
                                    <div className="bg-primary absolute top-0 left-[-9px] h-4 w-4 rounded-full"></div>
                                    <div className="text-lg font-semibold">Doctorat en Informatique</div>
                                    <div className="text-muted-foreground">Université de Paris, 2005</div>
                                    <div className="mt-1 text-sm">Thèse: "Algorithmes d'apprentissage pour systèmes autonomes"</div>
                                </div>
                                <div className="border-primary/20 relative border-l-2 pb-6 pl-6">
                                    <div className="bg-primary/70 absolute top-0 left-[-9px] h-4 w-4 rounded-full"></div>
                                    <div className="text-lg font-semibold">Master en Intelligence Artificielle</div>
                                    <div className="text-muted-foreground">École Polytechnique, 2000</div>
                                </div>
                                <div className="relative pl-6">
                                    <div className="bg-primary/50 absolute top-0 left-[-9px] h-4 w-4 rounded-full"></div>
                                    <div className="text-lg font-semibold">Licence en Mathématiques Appliquées</div>
                                    <div className="text-muted-foreground">Université de Lyon, 1998</div>
                                </div>
                            </div>
                        </div>

                        {/* Spécialisations */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Award className="text-primary h-6 w-6" />
                                <h2 className="text-2xl font-bold">Spécialisations</h2>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-8">
                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
                                    Intelligence Artificielle
                                </Badge>
                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
                                    Apprentissage Automatique
                                </Badge>
                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">Vision par Ordinateur</Badge>
                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
                                    Traitement du Langage Naturel
                                </Badge>
                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">Robotique</Badge>
                            </div>
                        </div>

                        {/* Publications Récentes */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <BookOpen className="text-primary h-6 w-6" />
                                <h2 className="text-2xl font-bold">Publications Récentes</h2>
                            </div>
                            <div className="space-y-4 pl-8">
                                <div className="bg-muted/30 hover:bg-muted/50 rounded-lg p-4 transition-colors">
                                    <div className="font-medium">Avancées en apprentissage par renforcement pour la robotique autonome</div>
                                    <div className="text-muted-foreground mt-1 text-sm">Journal of Artificial Intelligence, 2023</div>
                                </div>
                                <div className="bg-muted/30 hover:bg-muted/50 rounded-lg p-4 transition-colors">
                                    <div className="font-medium">Méthodes d'optimisation pour les réseaux de neurones profonds</div>
                                    <div className="text-muted-foreground mt-1 text-sm">IEEE Transactions on Neural Networks, 2022</div>
                                </div>
                                <div className="bg-muted/30 hover:bg-muted/50 rounded-lg p-4 transition-colors">
                                    <div className="font-medium">Applications de la vision par ordinateur dans les environnements industriels</div>
                                    <div className="text-muted-foreground mt-1 text-sm">Computer Vision Conference, 2021</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-8">
                        {/* Expérience Professionnelle */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Award className="text-primary h-6 w-6" />
                                <h2 className="text-2xl font-bold">Expérience Professionnelle</h2>
                            </div>
                            <div className="space-y-6 pl-8">
                                <div className="border-primary/20 relative border-l-2 pb-6 pl-6">
                                    <div className="bg-primary absolute top-0 left-[-9px] h-4 w-4 rounded-full"></div>
                                    <div className="text-lg font-semibold">Professeur Titulaire</div>
                                    <div className="text-muted-foreground">Université de Technologie, 2015 - Présent</div>
                                    <div className="mt-2 text-sm">
                                        <ul className="list-disc space-y-1 pl-5">
                                            <li>Direction du département d'Intelligence Artificielle</li>
                                            <li>Supervision de 12 doctorants</li>
                                            <li>Enseignement des cours avancés en apprentissage profond</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="border-primary/20 relative border-l-2 pb-6 pl-6">
                                    <div className="bg-primary/70 absolute top-0 left-[-9px] h-4 w-4 rounded-full"></div>
                                    <div className="text-lg font-semibold">Maître de Conférences</div>
                                    <div className="text-muted-foreground">Université de Sciences, 2008 - 2015</div>
                                    <div className="mt-2 text-sm">
                                        <ul className="list-disc space-y-1 pl-5">
                                            <li>Développement de nouveaux cours en vision par ordinateur</li>
                                            <li>Collaboration avec l'industrie sur des projets de recherche</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative pl-6">
                                    <div className="bg-primary/50 absolute top-0 left-[-9px] h-4 w-4 rounded-full"></div>
                                    <div className="text-lg font-semibold">Chercheur Post-Doctoral</div>
                                    <div className="text-muted-foreground">Institut de Recherche en IA, 2005 - 2008</div>
                                    <div className="mt-2 text-sm">
                                        <ul className="list-disc space-y-1 pl-5">
                                            <li>Recherche sur les algorithmes d'apprentissage profond</li>
                                            <li>Publication de 8 articles scientifiques</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Distinctions et Prix */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Award className="text-primary h-6 w-6" />
                                <h2 className="text-2xl font-bold">Distinctions et Prix</h2>
                            </div>
                            <div className="space-y-4 pl-8">
                                <div className="flex items-start gap-3">
                                    <div className="text-primary mt-1">🏆</div>
                                    <div>
                                        <div className="font-medium">Prix d'Excellence en Enseignement</div>
                                        <div className="text-muted-foreground text-sm">Université de Technologie, 2020</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-primary mt-1">🏅</div>
                                    <div>
                                        <div className="font-medium">Meilleur Article Scientifique</div>
                                        <div className="text-muted-foreground text-sm">Conférence Internationale sur l'IA, 2018</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-primary mt-1">🎖️</div>
                                    <div>
                                        <div className="font-medium">Bourse d'Excellence</div>
                                        <div className="text-muted-foreground text-sm">Fondation Nationale de Recherche, 2010-2012</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Langues */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Globe className="text-primary h-6 w-6" />
                                <h2 className="text-2xl font-bold">Langues</h2>
                            </div>
                            <div className="space-y-3 pl-8">
                                <div>
                                    <div className="mb-1 flex justify-between">
                                        <span className="font-medium">Français</span>
                                        <span className="text-muted-foreground text-sm">Natif</span>
                                    </div>
                                    <div className="bg-muted h-2 w-full rounded-full">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-1 flex justify-between">
                                        <span className="font-medium">Anglais</span>
                                        <span className="text-muted-foreground text-sm">Courant (C2)</span>
                                    </div>
                                    <div className="bg-muted h-2 w-full rounded-full">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-1 flex justify-between">
                                        <span className="font-medium">Allemand</span>
                                        <span className="text-muted-foreground text-sm">Intermédiaire (B1)</span>
                                    </div>
                                    <div className="bg-muted h-2 w-full rounded-full">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export const SectionAbout = () => {
    return (
        <section className="my-16">
            <div className="container">
                <div className="container-center">
                    <SectionPageTitle title="Mon portofilio">
                        Bienvenue dans mon portfolio. Ici, vous trouverez un aperçu de mon parcours académique, de mes recherches et des projets sur
                        lesquels j’ai travaillé.
                    </SectionPageTitle>
                    <ProfessorPortfolio />
                </div>
            </div>
        </section>
    );
};

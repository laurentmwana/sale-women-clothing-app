import { Button } from '@/components/ui/button';

export const SectionHero = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <svg
                    className="absolute inset-0 h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <path
                        d="M-30,200 C150,100 350,0 500,100 C650,200 700,300 900,200 C1100,100 1300,100 1500,200 L1500,800 L-30,800 Z"
                        className="fill-primary/5 dark:fill-primary/10"
                    />
                    <path
                        d="M-30,300 C150,200 350,100 500,200 C650,300 700,400 900,300 C1100,200 1300,200 1500,300 L1500,800 L-30,800 Z"
                        className="fill-primary/10 dark:fill-primary/20"
                    />
                </svg>
            </div>

            <div className="relative z-10 container px-4 py-16 md:py-24 lg:py-32">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Découvrez Notre Collection Élégante
                            </h1>
                            <p className="text-muted-foreground max-w-[600px] md:text-xl">
                                Des vêtements de qualité qui allient style, confort et élégance pour toutes les femmes.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="font-medium">
                                Nouvelle Collection
                            </Button>
                            <Button variant="outline" size="lg" className="font-medium">
                                Meilleures Ventes
                            </Button>
                        </div>
                    </div>
                    <div className="bg-muted relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full lg:order-last">
                        <img
                            src="/placeholder.svg?height=600&width=600"
                            width={600}
                            height={600}
                            alt="Modèle portant des vêtements de notre collection"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

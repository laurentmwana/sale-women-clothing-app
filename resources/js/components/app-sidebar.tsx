import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    AreaChartIcon,
    File,
    Filter,
    LayoutGrid,
    List,
    ListMinus,
    LucideAlignEndVertical,
    LucideHome,
    MessageCircleMoreIcon,
    NutIcon,
    Option as OptionIcon,
    SendToBack,
    Unlink2,
    User2Icon,
    UserCogIcon,
    Workflow,
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Tableau de bord',
        url: route('dashboard'),
        icon: LayoutGrid,
    },

    {
        title: 'Categorie',
        url: route('#category.index'),
        icon: Filter,
    },

    {
        title: 'Article',
        url: route('#post.index'),
        icon: List,
    },

    {
        title: 'Université',
        url: route('#university.index'),
        icon: LucideHome,
    },

    {
        title: 'Option',
        url: route('#option.index'),
        icon: OptionIcon,
    },

    {
        title: 'Promotion',
        url: route('#level.index'),
        icon: LucideAlignEndVertical,
    },

    {
        title: 'Cours',
        url: route('#course.index'),
        icon: ListMinus,
    },

    {
        title: 'Année Académique',
        url: route('#year-academic.index'),
        icon: NutIcon,
    },

    {
        title: 'Support de cours',
        url: route('#support-course.index'),
        icon: File,
    },

    {
        title: 'Travaux pratiques ',
        url: route('#work-pratical.index'),
        icon: Workflow,
    },

    {
        title: 'Dépôt Travaux',
        url: route('#deposit.index'),
        icon: SendToBack,
    },

    {
        title: 'Utilisateur',
        url: route('#user.index'),
        icon: User2Icon,
    },

    {
        title: 'Etudiants',
        url: route('#student.index'),
        icon: UserCogIcon,
    },

    {
        title: 'Evènement',
        url: route('#event.index'),
        icon: AreaChartIcon,
    },

    {
        title: 'Professeur',
        url: route('#professor.index'),
        icon: UserCogIcon,
    },

    {
        title: 'Paiement',
        url: route('#payment.index'),
        icon: Unlink2,
    },

    {
        title: 'Contact',
        url: route('#contact.index'),
        icon: MessageCircleMoreIcon,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

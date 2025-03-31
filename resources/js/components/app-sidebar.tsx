import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { DollarSign, Filter, LayoutGrid, ListChecks, ListFilter, TowerControl, User2 } from 'lucide-react';
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
        icon: ListFilter,
    },

    {
        title: 'Produit',
        url: route('#product.index'),
        icon: ListChecks,
    },

    {
        title: 'Stock',
        url: route('#stock.index'),
        icon: TowerControl,
    },

    {
        title: 'Utilisateur',
        url: route('#user.index'),
        icon: User2,
    },

    {
        title: 'Paiement',
        url: route('#payment.index'),
        icon: DollarSign,
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

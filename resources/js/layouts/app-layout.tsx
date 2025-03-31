import { FlashMessage } from '@/components/flash-message';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';

interface AppLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const { flashMessage } = usePage<SharedData>().props;

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            <FlashMessage flashMessage={flashMessage} />
            {children}
        </AppLayoutTemplate>
    );
};

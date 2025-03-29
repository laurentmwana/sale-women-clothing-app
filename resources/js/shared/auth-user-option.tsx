import { User, UserRole } from '@/types';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useInitials } from '@/hooks/use-initials';
import { isAdminOrProfessor } from '@/lib/auth';
import { router } from '@inertiajs/react';

type AuthUserOptionProps = { user: User; roles?: UserRole[] };

export const AuthUserOption = ({ user, roles }: AuthUserOptionProps) => {
    const getInitials = useInitials();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer overflow-hidden">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">{getInitials(user.name)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="max-h-[400px] overflow-y-auto">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => router.get(route('profile.edit'))}>
                    <span className="flex items-center gap-2">Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <span className="flex items-center gap-2">Notification</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Autres</DropdownMenuLabel>

                {isAdminOrProfessor(roles) && (
                    <DropdownMenuItem onClick={() => router.get(route('dashboard'))}>
                        <span className="flex items-center gap-2">Tableau de bord</span>
                    </DropdownMenuItem>
                )}

                <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                    <span className="flex items-center gap-2">Se déconnecter</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

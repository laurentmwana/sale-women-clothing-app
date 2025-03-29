<?php

namespace App\Helpers\Auth;

use App\Models\User;
use App\Enums\UserRoleEnum;

abstract class HasRoleUser
{
    public static function isAdmin(User $user): bool
    {
        return $user->hasRole(UserRoleEnum::ROLE_ADMIN->value);
    }

    public static function isAnonymous(User $user): bool
    {
        return $user->hasRole(UserRoleEnum::ROLE_ANONYMOUS->value);
    }

    public static function isClient(User $user): bool
    {
        return $user->hasRole(UserRoleEnum::ROLE_CLIENT->value);
    }
}

<?php

namespace App\Helpers\Auth;

use App\Enums\UserRoleEnum;

abstract class DefineRoleUser
{

    public static function admin(): string
    {
        return sprintf("role:%s", UserRoleEnum::ROLE_ADMIN->value);
    }

    public static function client(): string
    {
        return sprintf("role:%s", UserRoleEnum::ROLE_CLIENT->value);
    }
}

<?php

namespace App\Enums;

enum UserRoleEnum: string
{
    case ROLE_ANONYMOUS = "inconnu(e)";

    case ROLE_ADMIN = "administrateur";

    case ROLE_CLIENT = "client";
}

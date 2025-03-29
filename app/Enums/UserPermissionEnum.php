<?php

namespace App\Enums;

enum UserPermissionEnum: string
{
    case FULL = "*";

    case PRODUCT_SHOW = "PRODUCT_SHOW";
    
    case PRODUCT_LIKE = "PRODUCT_LIKE";
}

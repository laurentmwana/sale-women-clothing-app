<?php

namespace App\Enums;

enum UserPermissionEnum: string
{
    case FULL = "*";

        // POST
    case POST_EDIT = "POST_EDIT";
    case POST_DELETE = "POST_DELETE";
    case POST_CREATE = "POST_CREATE";
    case POST_SHOW = "POST_SHOW";
    case POST_COMMENT = "POST_COMMENT";

        // Category
    case CATEGORY_EDIT = "CATEGORY_EDIT";
    case CATEGORY_DELETE = "CATEGORY_DELETE";
    case CATEGORY_CREATE = "CATEGORY_CREATE";
    case CATEGORY_SHOW = "CATEGORY_SHOW";

    case COMMENT_SHOW = "COMMENT_SHOW";
    case COMMENT_LOCK = "COMMENT_LOCK";
}

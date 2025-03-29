<?php

namespace App\Services\Actions;

use App\Models\Like;

interface LikeActionInterface
{
    public function createLike(array $data): Like;

    public function deleteLike(Like $like): bool;
}

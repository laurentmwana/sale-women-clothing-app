<?php

namespace App\Actions;

use App\Services\Actions\LikeActionInterface;
use App\Models\Like;
use Illuminate\Support\Facades\DB;

class LikeAction implements LikeActionInterface
{
    public function createLike(array $data): Like
    {
        return DB::transaction(fn() => Like::create($data));
    }

    public function deleteLike(Like $like): bool
    {
        return DB::transaction(fn() => $like->delete());
    }
}

<?php

namespace App\Http\Controllers;

use App\Actions\LikeAction;
use App\Models\Like;
use App\Models\Product;
use App\Queries\LikeQuery;
use Illuminate\Http\Request;

class LikeProductController extends Controller
{

    public function __construct(private LikeAction $likeAction) {}

    public function __invoke(Request $request, Product $product)
    {
        $user  = $request->user();

        $like = LikeQuery::findLikeForUser($user->id, $product->id);

        $like instanceof Like
            ? $this->likeAction->deleteLike($like)
            : $this->likeAction->createLike([
                'product_id' => $product->id,
                'user_id' => $user->id,
            ]);

        redirect()->back()
            ->with('toast', 'votre appréciation pour ce produit a été enregistrée');
    }
}

<?php

namespace App\Http\Controllers\Other;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Queries\CardQuery;
use App\Queries\ClientQuery;

class CardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        $client = ClientQuery::findForUser($user->id);

        $card = CardQuery::findForClientAllRelation(
            $client->id,
        );

        return Inertia::render('other/card/index', [
            'card' => $card
        ]);
    }
}

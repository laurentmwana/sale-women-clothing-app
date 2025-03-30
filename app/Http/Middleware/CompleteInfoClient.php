<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use App\Models\Student;
use App\Enums\UserRoleEnum;
use App\Models\Client;
use App\Queries\ClientQuery;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\QueryBuilder\Catalogue\StudentQueryBuilder;

class CompleteInfoClient
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $situation): Response
    {
        $user = $request->user();


        if ($user instanceof User) {

            switch ($situation) {
                case 'no-empty':
                    $clientExist = ClientQuery::findForUser($user->id);
                    if (
                        $user->hasRole(UserRoleEnum::ROLE_ANONYMOUS->value) ||
                        !($clientExist instanceof Client)
                    ) {
                        return redirect()->route('no-empty-client.index');
                    }
                    break;

                case 'empty':
                    if (!$user->hasRole(UserRoleEnum::ROLE_ANONYMOUS->value)) {
                        return redirect()->route('welcome')
                            ->with('success', 'vous ne pouvez pas accèder à cette page (:');
                    }

                    break;

                default:
                    abort(
                        Response::HTTP_NOT_FOUND,
                        "Nous n'avons pas trouvé la situation : {$situation}"
                    );

                    break;
            }
        }

        return $next($request);
    }
}

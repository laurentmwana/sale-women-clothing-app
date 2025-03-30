<?php

namespace App\Http\Controllers\Other;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Client;
use App\Enums\UserRoleEnum;
use App\Actions\ClientAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Helpers\DataValues\DataFormatter;
use App\Http\Requests\ClientCompleteRequest;

class CompleteInfoClientController extends Controller
{
    public function __construct(private ClientAction $clientAction) {}

    public function index(): Response
    {
        return Inertia::render('no-empty-client/index', [
            'genders' => DataFormatter::getGenders(),
        ]);
    }

    public function store(ClientCompleteRequest $request): RedirectResponse
    {
        /** @var User */
        $user = $request->user();

        $student =  $this->clientAction->createClient($request->validated(), $user);

        if ($student instanceof Client) {
            $user->removeRole(
                UserRoleEnum::ROLE_ANONYMOUS->value,
            )->assignRole(
                UserRoleEnum::ROLE_CLIENT->value
            );
        }

        return redirect()->route('welcome');
    }
}

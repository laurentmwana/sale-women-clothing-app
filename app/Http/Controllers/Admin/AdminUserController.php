<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;
use App\Queries\UserQuery;
use App\Actions\UserAction;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class AdminUserController extends Controller
{
    public function __construct(private UserAction $userAction) {}

    public function index(Request $request): Response
    {
        $users = UserQuery::findAllWithFilters($request);

        return Inertia::render('admin/other/user/index', [
            'users' => $users,
        ]);
    }

    public function show(int $id): Response
    {
        $user = UserQuery::findOneWithRelation($id);

        return Inertia::render('admin/other/user/show', [
            'user' => $user,
        ]);
    }

    public function store(UserRequest $request): RedirectResponse
    {
        $this->userAction->createUser($request->validated());

        return redirect()->route('#user.index')->with('toast', 'utilisateur crée');
    }

    public function update(UserRequest $request, int $id): RedirectResponse
    {
        $user = UserQuery::findOne($id);

        $this->userAction->updateUser($request->validated(), $user);

        return redirect()->route('#user.index')->with('toast', 'utilisateur modifié');
    }

    public function destroy(Request $request, int $id): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = UserQuery::findOne($id);

        $this->userAction->deleteUser($user);

        return redirect()->route('#user.index')->with('toast', 'utilisateur supprimé');
    }
}
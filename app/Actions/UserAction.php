<?php

namespace App\Actions;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Services\Actions\UserActionInterface;

class UserAction implements UserActionInterface
{
    public function createUser(array $data): User
    {
        return DB::transaction(function () use ($data) {
            $user = User::create($data);

            return $user;
        });
    }

    public function updateUser(array $data, User $user): User
    {
        DB::transaction(function () use ($data, $user) {
            $user->update([
                ...$data,
                'password' => Hash::make($data['password'])
            ]);
        });

        return $user;
    }


    public function deleteUser(User $user): bool
    {
        DB::transaction(fn() => $user->delete());

        return true;
    }


    public function changePassword(User $user): bool
    {
        return false;
    }
}
<?php

namespace Database\Seeders;

use App\Enums\UserRoleEnum;
use Illuminate\Database\Seeder;
use App\Enums\UserPermissionEnum;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (UserRoleEnum::cases() as $role) {
            Role::create(['name' => $role->value]);
        }

        foreach (UserPermissionEnum::cases() as $permission) {
            Permission::create(['name' => $permission->value]);
        }

        // administrateur
        Role::findByName(UserRoleEnum::ROLE_ADMIN->value)->givePermissionTo(
            Permission::findByName(UserPermissionEnum::FULL->value)
        );

        Role::findByName(UserRoleEnum::ROLE_CLIENT->value)->givePermissionTo(
            Permission::findByName(UserPermissionEnum::PRODUCT_LIKE->value),
            Permission::findByName(UserPermissionEnum::PRODUCT_SHOW->value),
        );
    }
}

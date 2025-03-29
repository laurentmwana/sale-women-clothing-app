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

        // professeur
        Role::findByName(UserRoleEnum::ROLE_PROFESSOR->value)->givePermissionTo(
            Permission::findByName(UserPermissionEnum::POST_CREATE->value),
            Permission::findByName(UserPermissionEnum::POST_EDIT->value),
            Permission::findByName(UserPermissionEnum::POST_SHOW->value),
            Permission::findByName(UserPermissionEnum::POST_DELETE->value),
            Permission::findByName(UserPermissionEnum::POST_COMMENT->value),
            Permission::findByName(UserPermissionEnum::CATEGORY_CREATE->value),
            Permission::findByName(UserPermissionEnum::CATEGORY_EDIT->value),
            Permission::findByName(UserPermissionEnum::CATEGORY_DELETE->value),
            Permission::findByName(UserPermissionEnum::CATEGORY_SHOW->value),
            Permission::findByName(UserPermissionEnum::COMMENT_LOCK->value),
            Permission::findByName(UserPermissionEnum::COMMENT_SHOW->value),
        );
    }
}

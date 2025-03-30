<?php

namespace Database\Seeders;

use App\Enums\UserRoleEnum;
use App\Models\Category;
use App\Models\Client;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RolePermissionSeeder::class);

        User::factory()->create([
            'name' => 'Agnès Kalala',
            'email' => 'admin@gmail.com',
        ])->assignRole(Role::findByName(UserRoleEnum::ROLE_ADMIN->value))
        ;

        User::factory(50)->create()->each(function (User $user) {
            Client::factory()->create(['user_id' => $user->id]);
            $user->assignRole(Role::findByName(UserRoleEnum::ROLE_CLIENT->value));
        });

        Category::factory(10)->create();

        $products = Product::factory(20)->create();

        foreach ($products as $product) {
            $categoriesId = [];
            for ($i = 0; $i < 2; $i++) {
                $categoriesId[] = Category::all()->random()->id;
            }
            $product->categories()->sync($categoriesId);
        }

        User::factory(30)->create()
            ->each(function (User $user) {
                $user->assignRole(
                    Role::findByName(UserRoleEnum::ROLE_CLIENT->value)
                );

                Client::factory()->create([
                    'user_id' => $user->id
                ]);
            });
    }
}

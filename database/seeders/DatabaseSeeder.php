<?php

namespace Database\Seeders;

use App\Enums\UserRoleEnum;
use App\Models\Category;
use App\Models\Client;
use App\Models\Comment;
use App\Models\Contact;
use App\Models\Course;
use App\Models\Deposit;
use App\Models\Level;
use App\Models\Option;
use App\Models\Post;
use App\Models\Professor;
use App\Models\Quiz;
use App\Models\Student;
use App\Models\SupportCourse;
use App\Models\University;
use App\Models\User;
use App\Models\WorkPratical;
use App\Models\YearAcademic;
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
    }
}

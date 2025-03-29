<?php

namespace Database\Factories;

use App\Enums\GenderEnum;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'firstname' => $this->faker->firstName(),
            'address' => $this->faker->address(),
            'phone' => $this->faker->phoneNumber(),
            'gender' => $this->faker->randomElement(GenderEnum::class)->value
        ];
    }
}

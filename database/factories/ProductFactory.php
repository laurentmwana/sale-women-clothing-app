<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->text(15),
            'price' => $this->faker->randomFloat(2, 10000, 90000),
            'image' => $this->faker->imageUrl(),
            'slug' => $this->faker->slug(),
            'description' => $this->faker->paragraph()
        ];
    }
}

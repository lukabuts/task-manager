<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence,
            'user_id' => 1,
            'completed' => $this->faker->boolean,
            'completed_at' => $this->faker->boolean ? $this->faker->dateTimeBetween('-1 year', 'now') : null,
            'priority' => $this->faker->randomElement(['low', 'medium', 'high']),
            'description' => $this->faker->paragraph,
            'due_date' => $this->faker->dateTimeBetween('now', '+1 year'),
        ];
    }
}

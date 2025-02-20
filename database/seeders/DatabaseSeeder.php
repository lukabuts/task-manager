<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Luka Butskhrikidze',
            'email' => 'butskhrikidzeluka0@gmail.com',
            'password' => bcrypt('butskhrikidzeluka0@gmail.com'),
        ]);
        Task::factory(100)->create();
    }
}

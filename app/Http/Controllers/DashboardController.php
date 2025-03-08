<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $tasks = $request->user()->tasks()->get();
        $completed = $tasks->filter(function ($task) {
            return $task->completed === 1;
        })->count();

        $due = $tasks->filter(function ($task) {
            return $task->due_date >= Carbon::now() && $task->completed !== 1;
            ;
        })->count();

        $overdue = $tasks->filter(function ($task) {
            return ($task->due_date < Carbon::now() && $task->completed !== 1) || $task->completed_at < $task->due_date;
            ;
        })->count();


        return Inertia::render('Dashboard/Index', [ 'taskStats' => [
                'completed' => $completed,
                'overdue' => $overdue,
                'due' => $due,
        ], "recentTasks" => $tasks->take(5), 'quote' => Inspiring::quote()]);

    }
}

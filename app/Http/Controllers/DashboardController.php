<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $tasks = $request->user()->tasks()->latest()->get();
        $now = Carbon::now()->toDateString();
        
        $completed = 0;
        $due = 0;
        $overdue = 0;

        foreach ($tasks as $task) {
            $due_date = Carbon::parse($task->due_date)->toDateString();
            $completed_at = Carbon::parse($task->completed_at)->toDateString();

            $pastDue = $due_date < $now;
            $completedLate = $task->completed && $completed_at > $due_date;

            if ($task->completed && !$pastDue && !$completedLate) {
                $completed++;
            }
            if (!$pastDue && !$completedLate && !$task->completed) {
                $due++;
            }
            if ($pastDue || $completedLate) {
                $overdue++;
            }
        }


        return Inertia::render('Dashboard/Index', [ 'taskStats' => [
                'completed' => $completed,
                'overdue' => $overdue,
                'due' => $due,
                'total' => $tasks->count()
        ], "recentTasks" => $tasks->take(5)]);

    }
}
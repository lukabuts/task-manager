<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskStoreRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render(
            'Task/Index',
            [
                'tasks' => $request->user()->tasks()->latest()->paginate(10),
            ]
        );

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Task/Create'
        );

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskStoreRequest $request)
    {
        $request->user()->tasks()->create($request->only('name', 'description', 'due_date', 'priority'));

        return redirect()->route('task.index')->with('success', 'Task created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return Inertia::render(
            'Task/Show',
            [
                'task' => $task,
            ]
        );

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        return Inertia::render(
            'Task/Edit',
            [
                'task' => $task,
            ]
        );

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskStoreRequest $request, Task $task)
    {
        $task->update($request->only('name', 'description', 'due_date', 'priority'));

        return redirect()->route('task.index')->with('success', 'Task updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return redirect()->route('task.index')->with('success', 'Task deleted successfully.');
    }

    public function complete(Task $task)
    {

        $data = [];
        if (!$task->completed) {
            $data = ['completed' => !$task->completed, 'completed_at' => now()];
        } else {
            $data= ['completed' => !$task->completed, 'completed_at' => null];
        }

        $task->update($data);

        return redirect()->route('task.index')->with('success', 'Task updated successfully.');

    }
}

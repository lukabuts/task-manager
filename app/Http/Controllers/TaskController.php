<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskStoreRequest;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $tasks = $request->user()->tasks()
            ->latest()
            ->filter($request->only(['completed', 'notCompleted', 'priorities', 'from', 'to', 'search']))
            ->paginate(10);

        return Inertia::render('Task/Index', ['tasks' => $tasks]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render(
            'Task/Create'
        );

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskStoreRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->user()->tasks()->create($request->only('name', 'description', 'due_date', 'priority'));

        return Redirect::route('tasks.index')->with([
            'message' => [
                'type' => 'success',
                'message' => trans('messages.type.success'),
                'body' => trans('messages.task.created')
            ]
        ]);

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
    public function edit(Task $task): Response
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
    public function update(TaskStoreRequest $request, Task $task): RedirectResponse
    {
        $task->update($request->only('name', 'description', 'due_date', 'priority'));

        if ($task->wasChanged()) {
            $task->update(['completed' => false, 'completed_at' => null]);
        }

        return Redirect::route('tasks.index')->with([
            'message' => [
                'type' => 'success',
                'message' => trans('messages.type.success'),
                'body' => trans('messages.task.updated')
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task): RedirectResponse
    {
        $task->delete();
        return Redirect::route('tasks.index')->with([
            'message' => [
                'type' => 'success',
                'message' => trans('messages.type.success'),
                'body' => trans('messages.task.deleted')
            ]
        ]);

    }

    public function complete(Task $task): void
    {
        $task->update([
            'completed' => !$task->completed,
            'completed_at' => $task->completed ? null : now()
        ]);
    }
}

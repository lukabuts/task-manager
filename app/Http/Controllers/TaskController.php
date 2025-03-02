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
        // Get the current user's tasks
        $query = $request->user()->tasks()->latest();

        // Apply filters
        if ($request->has('completed')) {
            $query->where('completed', filter_var($request->input('completed'), FILTER_VALIDATE_BOOLEAN));
        }

        if ($request->has('notCompleted')) {
            $query->where('completed', false);
        }

        if ($request->has('priorities')) {
            $query->whereIn('priority', $request->input('priorities'));
        }

        if ($request->has('from') && $request->has('to')) {
            $query->whereBetween('created_at', [$request->input('from'), $request->input('to')]);
        }

        if ($request->has('search')) {
            $query->where('name', 'LIKE', '%' . $request->input('search') . '%');
        }

        // Paginate the results
        $tasks = $query->paginate(10);


        return Inertia::render('Task/Index', ['tasks' => $tasks, ]);
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
        if ($request->task->getChanges()) {
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
        $data = [];
        if (!$task->completed) {
            $data = ['completed' => !$task->completed, 'completed_at' => now()];
        } else {
            $data= ['completed' => !$task->completed, 'completed_at' => null];
        }

        $task->update($data);
    }
}

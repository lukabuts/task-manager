<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TaskPolicy
{
    
    public function edit(User $user, Task $task): Response
    {
        if (!$task->user->is($user)) {
            throw new ModelNotFoundException();
        }

        return Response::allow();
    }

}

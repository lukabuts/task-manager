<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TaskPolicy
{
    
    public function edit(User $user, Task $task): Response
    {
        return $task->user->is($user)
            ? Response::allow()
            : Response::deny('You do not own this task.');
    }

}

<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class TaskStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
                'name' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
                'due_date' => 'required|date',
                'priority' => 'required|in:low,medium,high',
        ];
    }

    public function authenticate()
    {
        if (count(Auth::user()->tasks) >= User::TASK_LIMIT) {
            throw ValidationException::withMessages([
                'description' => trans('messages.task.over_limit', ['limit' => User::TASK_LIMIT]),
            ]);
        }
    }
}

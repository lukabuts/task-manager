<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Task extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    protected $casts = [
    'completed' => 'boolean',
    'due_date' => 'datetime',
    'completed_at' => 'datetime',
    ];

    // Query Scope for Filtering
    public function scopeFilter(Builder $query, array $filters): Builder
    {
        if (isset($filters['completed'])) {
            $query->where('completed', filter_var($filters['completed'], FILTER_VALIDATE_BOOLEAN));
        }

        if (isset($filters['notCompleted'])) {
            $query->where('completed', false);
        }

        if (!empty($filters['priorities'])) {
            $query->whereIn('priority', $filters['priorities']);
        }

        if (!empty($filters['from']) && !empty($filters['to'])) {
            $query->whereBetween('created_at', [$filters['from'], $filters['to']]);
        }

        if (!empty($filters['search'])) {
            $query->where('name', 'LIKE', '%' . $filters['search'] . '%');
        }

        return $query;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

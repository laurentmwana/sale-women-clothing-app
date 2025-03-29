<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = ['name', 'image', 'price', 'description'];

    public function clients(): BelongsToMany
    {
        return $this->belongsToMany(Client::class);
    }

    public function cards(): HasMany
    {
        return $this->hasMany(Card::class);
    }
}

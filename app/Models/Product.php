<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = ['name', 'image', 'price', 'description', 'slug'];

    public function clients(): BelongsToMany
    {
        return $this->belongsToMany(Client::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function cards(): HasMany
    {
        return $this->hasMany(Card::class);
    }

    public function stock(): HasOne
    {
        return $this->hasOne(Stock::class);
    }

}

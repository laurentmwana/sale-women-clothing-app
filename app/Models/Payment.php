<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    /** @use HasFactory<\Database\Factories\PaymentFactory> */
    use HasFactory;

    protected $fillable = ['', 'client_id', 'card_id', 'status'];

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }


    public function card(): BelongsTo
    {
        return $this->belongsTo(Card::class);
    }
}

<?php

namespace App\Actions;

use App\Models\Client;
use Illuminate\Support\Facades\DB;
use App\Services\Actions\ClientActionInterface;

class ClientAction implements ClientActionInterface
{

    public function createClient(array $data): Client
    {
        return DB::transaction(fn() => Client::create($data));
    }

    public function updateClient(array $data, Client $client): Client
    {
        DB::transaction(fn() => $client->update($data));

        return $client;
    }

    public function deleteClient(Client $client): bool
    {
        return DB::transaction(fn() => $client->delete());
    }
}

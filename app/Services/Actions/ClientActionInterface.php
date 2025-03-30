<?php

namespace App\Services\Actions;

use App\Models\Client;

interface ClientActionInterface
{
    public function createClient(array $data): Client;

    public function updateClient(array $data, Client $client): Client;

    public function deleteClient(Client $client): bool;
}

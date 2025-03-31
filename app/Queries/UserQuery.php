<?php

namespace App\Queries;

use App\Models\User;
use Illuminate\Http\Request;
use App\Searchable\SearchData;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

abstract class UserQuery
{
    public static function findAllWithFilters(Request $request): LengthAwarePaginator
    {
        $builder =  User::with('roles')->orderByDesc('updated_at');

        $columnSearch = ['name', 'email'];

        $serachValue = $request->query('q');

        if ($serachValue !== null && !empty($serachValue)) {
            $builder = SearchData::handle($builder, $serachValue, $columnSearch);
        }

        return $builder->paginate();
    }


    public static function findOne(int $id): User
    {
        return User::findOrFail($id);
    }

    public static function findOneWithRelation(int $id): User
    {
        return User::findOrFail($id);
    }
}
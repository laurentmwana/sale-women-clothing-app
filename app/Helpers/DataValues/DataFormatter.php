<?php

namespace App\Helpers\DataValues;

use App\Models\Category;
use App\Enums\GenderEnum;
use Illuminate\Support\Collection;


class DataFormatter
{
    public static function getCategories(): Collection
    {
        $collection = new Collection();

        foreach (Category::all(['id', 'name']) as $category) {
            $collection->add(
                (new DataValueObject())
                    ->setId($category->id)
                    ->setName($category->name)
            );
        }

        return $collection;
    }

    public static function getGenders(): Collection
    {
        $collection = new Collection();

        foreach (GenderEnum::cases() as $gender) {
            $collection->add(
                (new DataValueObject())
                    ->setId($gender->value)
                    ->setName($gender->value)
            );
        }

        return $collection;
    }
}

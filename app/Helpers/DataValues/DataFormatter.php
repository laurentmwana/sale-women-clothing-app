<?php

namespace App\Helpers\DataValues;

use App\Enums\EventTypeEnum;
use App\Enums\GenderEnum;
use App\Enums\MobileMoneyEnum;
use App\Models\Category;
use App\Models\Course;
use App\Models\Level;
use App\Models\Option;
use App\Models\Professor;
use App\Models\Student;
use App\Models\University;
use App\Models\WorkPratical;
use App\Models\YearAcademic;
use Illuminate\Support\Collection;


class DataFormatter
{

    // public static function getCourses(): Collection
    // {
    //     return Course::orderByDesc('updated_at')
    //         ->get(['name', 'id']);
    // }


    // public static function getYears(): Collection
    // {
    //     return YearAcademic::orderByDesc('updated_at')
    //         ->get(['name', 'id']);
    // }

    // public static function getWorkPraticals(): Collection
    // {
    //     $workPraticals =  WorkPratical::orderByDesc('updated_at')->get(['title', 'id']);

    //     $collection = new Collection();

    //     foreach ($workPraticals as $workPratical) {
    //         $collection->add(
    //             (new DataValueObject())
    //                 ->setId($workPratical->id)
    //                 ->setName($workPratical->title)
    //         );
    //     }

    //     return $collection;
    // }



    // public static function getStudents(): Collection
    // {
    //     $students =  Student::orderByDesc('updated_at')->get(['full_name', 'id']);

    //     $collection = new Collection();

    //     foreach ($students as $student) {
    //         $collection->add(
    //             (new DataValueObject())
    //                 ->setId($student->id)
    //                 ->setName($student->full_name)
    //         );
    //     }

    //     return $collection;
    // }


    // public static function getOptions(): Collection
    // {
    //     return Option::orderByDesc('updated_at')
    //         ->get(['name', 'id']);
    // }

    // public static function getProfessors(): Collection
    // {
    //     $professors =  Professor::orderByDesc('updated_at')
    //         ->get(['id', 'full_name']);

    //     $collection = new Collection();

    //     foreach ($professors as $professor) {
    //         $collection->add(
    //             (new DataValueObject())
    //                 ->setId($professor->id)
    //                 ->setName($professor->full_name)
    //         );
    //     }

    //     return $collection;
    // }


    // public static function getLevels(): Collection
    // {
    //     $levels =  Level::orderByDesc('updated_at')
    //         ->get(['name', 'id', 'alias']);

    //     $collection = new Collection();

    //     foreach ($levels as $level) {
    //         $collection->add(
    //             (new DataValueObject())
    //                 ->setId($level->id)
    //                 ->setName(sprintf("%s - [%s]", $level->name, $level->alias))
    //         );
    //     }

    //     return $collection;
    // }
}

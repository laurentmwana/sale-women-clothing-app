<?php

namespace App\Enums;

enum UserTypeEnum: string
{
    case PROFESSOR = "professeur";

    case STUDENT = "étudiant";

    case PROFESSIONAL = "professionnel";
}

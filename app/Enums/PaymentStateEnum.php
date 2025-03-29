<?php

namespace App\Enums;

enum PaymentStateEnum: string
{
    case PENDING = "en cours";

    case CANCELED = "annuler";

    case SUCCESS = "succès";
}

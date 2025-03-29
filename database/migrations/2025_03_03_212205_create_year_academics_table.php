<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('year_academics', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_active')->default(false);
            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::table('work_praticals', function (Blueprint $table) {
            $table->foreignId('year_academic_id')
                ->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });

        Schema::table('support_courses', function (Blueprint $table) {
            $table->foreignId('year_academic_id')
                ->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('year_academics');
    }
};

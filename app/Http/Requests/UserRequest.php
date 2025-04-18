<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rules\Unique;
use Illuminate\Foundation\Http\FormRequest;


class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = $this->input('id');

        return   [
            'name' => [
                'required',
                'between:3,30',
            ],

            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                (new Unique(User::class))->ignore($id)
            ],

            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }
}
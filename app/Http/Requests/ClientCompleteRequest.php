<?php

namespace App\Http\Requests;

use App\Models\Client;
use App\Enums\GenderEnum;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Unique;
use Illuminate\Foundation\Http\FormRequest;

class ClientCompleteRequest extends FormRequest
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
                'between:3,30'
            ],

            'firstname' => [
                'required',
                'between:3,30'
            ],

            'gender' => [
                'required',
                Rule::enum(GenderEnum::class)
            ],

            'phone' => [
                'required',
                'between:10,15',
                (new Unique(Client::class))->ignore($id)
            ],

            'address' => [
                'required',
                'between:5,60'
            ],
        ];
    }
}

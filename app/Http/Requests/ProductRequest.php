<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
        return  [
            'name' => [
                'required',
                'between:3,255',
            ],
            'price' => ['required', 'regex:/^\d+(\.\d{1,2})?$/'],

            'description' => [
                'nullable',
                'min:100',
                'max:9000'
            ],

            'categories' => ['required', 'array', 'exists:categories,id', 'between:1,2'],

            'image' => [
                'required',
                'image',
                'mimes:png,jpg',
                'max:1024'
            ]
        ];
    }
}

<?php

namespace App\Http\Requests;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Unique;

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
        $id = $this->input('id');

        return  [
            'name' => [
                'required',
                'between:3,255',
                (new Unique(Product::class))->ignore($id),
            ],

            'description' => [
                'required',
                'min:100'
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

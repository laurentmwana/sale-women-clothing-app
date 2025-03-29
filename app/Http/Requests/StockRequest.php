<?php

namespace App\Http\Requests;

use App\Models\Category;
use App\Models\Stock;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Unique;

class StockRequest extends FormRequest
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
            'product_id' => [
                'required',
                'exists:products,id',
            ],

            'stock_value' => [
                'required',
                'numeric',
                'between:1,100',
            ],
        ];
    }
}

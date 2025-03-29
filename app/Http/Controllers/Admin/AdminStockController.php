<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Actions\StockAction;
use App\Helpers\DataValues\DataFormatter;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\StockRequest;
use App\Models\Stock;
use App\Queries\StockQuery;

class AdminStockController extends Controller
{

    public function __construct(private StockAction $stockAction) {}

    public function index(Request $request): Response
    {
        $stocks = StockQuery::findAllWithFilters($request);

        return Inertia::render('admin/stock/index', [
            'stocks' => $stocks,
            'products' => DataFormatter::getProducts(),
        ]);
    }

    public function show(int $id): Response
    {
        $stock = StockQuery::findOne($id);

        return Inertia::render('admin/stock/show', [
            'stock' => $stock,
            'products' => DataFormatter::getProducts(),
        ]);
    }

    public function store(StockRequest $request): RedirectResponse
    {
        $stock = StockQuery::findForProduct($request->validated('product_id'));

        $stock instanceof Stock
            ? $this->stockAction->updateStock($request->validated(), $stock)
            : $this->stockAction->createStock($request->validated());


        return redirect()->route('#stock.index')->with('toast', 'stock créé');
    }

    public function update(StockRequest $request, int $id): RedirectResponse
    {
        $stock = StockQuery::findOne($id);

        $this->stockAction->updateStock($request->validated(), $stock);

        return redirect()->route('#stock.index')->with('toast', 'stock modifié');
    }

    public function destroy(Request $request, int $id): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $stock = StockQuery::findOne($id);

        $this->stockAction->deleteStock($stock);

        return redirect()->route('#stock.index')->with('toast', 'stock supprimé');
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetAssetData;
use App\Models\Asset;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class AssetController extends Controller
{
    public function price(GetAssetData $request, Asset $asset)
    {
        $apiClass = sprintf('App\\Helpers\\Api\\%sAssetApi', $asset->type_name);

        if ($price = (new $apiClass())->getPrice($asset->external_id)) {
            $asset->update(['price' => $price]);
        }

        return $asset->price;
    }

    public function history(GetAssetData $request, Asset $asset)
    {
        $apiClass = sprintf('App\\Helpers\\Api\\%sAssetApi', $asset->type_name);

        return (new $apiClass())->getHistory(
            $asset->external_id,
            'm1',
            Carbon::now()->subMinutes(30)->timestamp * 1000,
            Carbon::now()->timestamp * 1000
        );
    }

    public function search(Request $request)
    {
        $scopeMethod = strtolower($request->type);

        $whereClause = $request->exact
            ? ['name = ?', [$request->search]]
            : ['LOWER(name) LIKE ?', ['%' . strtolower($request->search) . '%']];

        return Asset::select('id', 'name', 'symbol', 'external_id')
            ->active()
            ->$scopeMethod()
            ->whereRaw(...$whereClause)
            ->orderBy('name')
            ->get();
    }
}

<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreShoeRequest;
use App\Http\Resources\V1\ShoeCollection;
use App\Http\Resources\V1\ShoeResource;
use App\Shoe;
use Illuminate\Http\Request;

class ShoeController extends Controller
{

    //
    public function index()
    {
        // return response()->json("Shoe");
        return new ShoeCollection(Shoe::paginate(10));
    }

    public function store(StoreShoeRequest $request)
    {
        Shoe::create($request->validated());

        return response()->json("Created");
    }

    public function show(Shoe $shoe)
    {
        // return response()->json("Shoe");

        return new ShoeResource($shoe);
    }
    public function update(StoreShoeRequest $request, Shoe $shoe)
    {
        // echo $shoe->id;
        $shoe->update($request->validated());
        return response()->json("Updated");
    }
    public function destroy(Shoe $shoe)
    {
        $shoe->delete();
        return response()->json("Deleted");
    }
}

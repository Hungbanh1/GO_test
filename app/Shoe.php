<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shoe extends Model
{
    //
    protected $table = 'shoes';
    protected $fillable = ['image', 'name', 'description', 'price', 'color'];
}

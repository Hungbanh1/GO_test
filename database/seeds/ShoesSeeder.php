<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShoesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $shoesData = file_get_contents(database_path('data/shoes.json'));
        $shoes = json_decode($shoesData, true);

        foreach ($shoes['shoes'] as $shoe) {
            DB::table('shoes')->insert([
                'image' => $shoe['image'],
                'name' => $shoe['name'],
                'description' => $shoe['description'],
                'price' => $shoe['price'],
                'color' => $shoe['color'], // Nếu bạn muốn thêm trường màu sắc vào bảng shoes
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}

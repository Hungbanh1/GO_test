@extends('layouts.main')
@section('content')
    <div id="shoesList">
        <div class="shoeItem card">
            <div class="logo">
                <img src="{{ asset('public/assets/nike.png') }}" width="50px" alt="" />

            </div>
            <div class="our-products">Our Products</div>
        </div>
        <div class="shoppingcart card">
            <div class="logo">
                <img src="{{ asset('public/assets/nike.png') }}" width="50px" alt="" />
            </div>
            <div class="d-flex">
                <div class="our-products">Your cart</div>
                <div class="total">$0.00</div>
            </div>
            <div class="cart-empty">
                <p class="po-rela">Your cart is empty.</p>
            </div>
            <div class="list-order po-rela"></div>
        </div>
    </div>
@endsection

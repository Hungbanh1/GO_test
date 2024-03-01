<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./node_modules/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="{{ asset('public/css/style.css') }}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="{{ asset('public/js/api.js') }}"></script>
    <script src="{{ asset('public/js/index.js') }}"></script>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet" />
    <title>Document</title>
</head>

<body>
    <div id="wp-content">
        @yield('content')
    </div>
</body>

</html>

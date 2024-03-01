$(document).ready(function () {
    //GET 
  var settings = {
    url: "http://localhost/GO/api/v1/shoes",
    method: "GET",
    timeout: 0,
    headers: {
      Cookie:
        "XSRF-TOKEN=eyJpdiI6IndMa1piTDE4elM3Vmo2MFZKK2owR3c9PSIsInZhbHVlIjoidmFBODZPc3pYZDVJRmFrMlFYb2JCaUtjdmF1TUhDajRBcHluUHA2bkZXV3BIZHdvVmVJQ05iZFF3UzI1UWFGNm8wYkhMbXZxKzZUc1ZQM3lCY2VpMkJLK2YxOXN5SmRkT3JvZ0dKTExPZFBzb2tkbnVNUzMzZzQrVG05b3JockwiLCJtYWMiOiJiOTA0OGZlOTBlYjNmYTUwNjI4ZjVkMGQwNDE3ZGU2N2EyODQyMjE3MWNhZWEzNjA4NGRkZjYwNjkxYTJjNTA2In0%3D; laravel_session=eyJpdiI6IkpMZGFoQ3U5YVdod01FOGhiN2ltSWc9PSIsInZhbHVlIjoiNHZDV3U2VWlyVk5aM01KZ3d6dWtGaUFzV0duZlVwd1d0MkgyVTd4SFFSQXlGbkZwL3NrMjdETEFHdEl1dE1VRzc2SEJPT1krcmhYVzZ1Z0NhdDU1Zi9VQjAzZlc5OUUwYjFYSDZGbU40aktGN1I0cU1RMWJtYnZUZHp2MnNHaEQiLCJtYWMiOiIzYzgzOTZkNjYyZGUwOTMwNTU5ZjI4YWMwM2ViMjM4ZmVlY2JkNDlhYmMxYWVlZWQwNGYyYzhjNWEzYzI4MmJkIn0%3D",
    },
  };
  //GET id
  // var settings = {
  //   "url": "http://localhost/GO/api/v1/shoes/1",
  //   "method": "GET",
  //   "timeout": 0,
  //   "headers": {
  //     "Cookie": "XSRF-TOKEN=eyJpdiI6IndMa1piTDE4elM3Vmo2MFZKK2owR3c9PSIsInZhbHVlIjoidmFBODZPc3pYZDVJRmFrMlFYb2JCaUtjdmF1TUhDajRBcHluUHA2bkZXV3BIZHdvVmVJQ05iZFF3UzI1UWFGNm8wYkhMbXZxKzZUc1ZQM3lCY2VpMkJLK2YxOXN5SmRkT3JvZ0dKTExPZFBzb2tkbnVNUzMzZzQrVG05b3JockwiLCJtYWMiOiJiOTA0OGZlOTBlYjNmYTUwNjI4ZjVkMGQwNDE3ZGU2N2EyODQyMjE3MWNhZWEzNjA4NGRkZjYwNjkxYTJjNTA2In0%3D; laravel_session=eyJpdiI6IkpMZGFoQ3U5YVdod01FOGhiN2ltSWc9PSIsInZhbHVlIjoiNHZDV3U2VWlyVk5aM01KZ3d6dWtGaUFzV0duZlVwd1d0MkgyVTd4SFFSQXlGbkZwL3NrMjdETEFHdEl1dE1VRzc2SEJPT1krcmhYVzZ1Z0NhdDU1Zi9VQjAzZlc5OUUwYjFYSDZGbU40aktGN1I0cU1RMWJtYnZUZHp2MnNHaEQiLCJtYWMiOiIzYzgzOTZkNjYyZGUwOTMwNTU5ZjI4YWMwM2ViMjM4ZmVlY2JkNDlhYmMxYWVlZWQwNGYyYzhjNWEzYzI4MmJkIn0%3D"
  //   },
  // };
  //POST
  // var settings = {
  //   url: "http://localhost/GO/api/v1/shoes",
  //   method: "POST",
  //   timeout: 0,
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Cookie:
  //       "XSRF-TOKEN=eyJpdiI6IndMa1piTDE4elM3Vmo2MFZKK2owR3c9PSIsInZhbHVlIjoidmFBODZPc3pYZDVJRmFrMlFYb2JCaUtjdmF1TUhDajRBcHluUHA2bkZXV3BIZHdvVmVJQ05iZFF3UzI1UWFGNm8wYkhMbXZxKzZUc1ZQM3lCY2VpMkJLK2YxOXN5SmRkT3JvZ0dKTExPZFBzb2tkbnVNUzMzZzQrVG05b3JockwiLCJtYWMiOiJiOTA0OGZlOTBlYjNmYTUwNjI4ZjVkMGQwNDE3ZGU2N2EyODQyMjE3MWNhZWEzNjA4NGRkZjYwNjkxYTJjNTA2In0%3D; laravel_session=eyJpdiI6IkpMZGFoQ3U5YVdod01FOGhiN2ltSWc9PSIsInZhbHVlIjoiNHZDV3U2VWlyVk5aM01KZ3d6dWtGaUFzV0duZlVwd1d0MkgyVTd4SFFSQXlGbkZwL3NrMjdETEFHdEl1dE1VRzc2SEJPT1krcmhYVzZ1Z0NhdDU1Zi9VQjAzZlc5OUUwYjFYSDZGbU40aktGN1I0cU1RMWJtYnZUZHp2MnNHaEQiLCJtYWMiOiIzYzgzOTZkNjYyZGUwOTMwNTU5ZjI4YWMwM2ViMjM4ZmVlY2JkNDlhYmMxYWVlZWQwNGYyYzhjNWEzYzI4MmJkIn0%3D",
  //   },
  //   data: JSON.stringify({
  //     name: "TESt",
  //     image: "TESt",
  //     description: "TESt",
  //     color: "TESt",
  //     price: "TESt",
  //   }),
  // };
  // //update
  // var settings = {
  //   "url": "http://localhost/GO/api/v1/shoes/11",
  //   "method": "PUT",
  //   "timeout": 0,
  //   "headers": {
  //     "Content-Type": "application/json",
  //     "Cookie": "XSRF-TOKEN=eyJpdiI6IndMa1piTDE4elM3Vmo2MFZKK2owR3c9PSIsInZhbHVlIjoidmFBODZPc3pYZDVJRmFrMlFYb2JCaUtjdmF1TUhDajRBcHluUHA2bkZXV3BIZHdvVmVJQ05iZFF3UzI1UWFGNm8wYkhMbXZxKzZUc1ZQM3lCY2VpMkJLK2YxOXN5SmRkT3JvZ0dKTExPZFBzb2tkbnVNUzMzZzQrVG05b3JockwiLCJtYWMiOiJiOTA0OGZlOTBlYjNmYTUwNjI4ZjVkMGQwNDE3ZGU2N2EyODQyMjE3MWNhZWEzNjA4NGRkZjYwNjkxYTJjNTA2In0%3D; laravel_session=eyJpdiI6IkpMZGFoQ3U5YVdod01FOGhiN2ltSWc9PSIsInZhbHVlIjoiNHZDV3U2VWlyVk5aM01KZ3d6dWtGaUFzV0duZlVwd1d0MkgyVTd4SFFSQXlGbkZwL3NrMjdETEFHdEl1dE1VRzc2SEJPT1krcmhYVzZ1Z0NhdDU1Zi9VQjAzZlc5OUUwYjFYSDZGbU40aktGN1I0cU1RMWJtYnZUZHp2MnNHaEQiLCJtYWMiOiIzYzgzOTZkNjYyZGUwOTMwNTU5ZjI4YWMwM2ViMjM4ZmVlY2JkNDlhYmMxYWVlZWQwNGYyYzhjNWEzYzI4MmJkIn0%3D"
  //   },
  //   "data": JSON.stringify({
  //     "name": "TEStipdsad",
  //     "image": "TESt",
  //     "description": "TESt",
  //     "color": "TESt",
  //     "price": "12.32"
  //   }),
  // };
  //delete 
  // var settings = {
  //   "url": "",
  //   "method": "DELETE",
  //   "timeout": 0,
  // };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});

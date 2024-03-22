// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>All Products</title>
//     <link rel="stylesheet" href="adminStyle.css">
// </head>
// <body>
//     <div class="container">
//         <div class="main">
//             <div class="details">
//                 <div class="allProduct">
//                     <div class="cardHeader">
//                         <h2>All Products</h2>
//                     </div>

//                     <table class="table">
//                         <thead>
//                             <tr>
//                                 <th class="text-center">I.D.</th>
//                                 <th class="text-center">Product Image</th>
//                                 <th class="text-center">Product Model</th>
//                                 <th class="text-center">Product Name</th>
//                                 <th class="text-center">Product Description</th>
//                                 <th class="text-center">Category</th>
//                                 <th class="text-center">Price</th>
//                                 <th class="text-center" colspan="2">Action</th>
//                             </tr>
//                         </thead>

//                         <tbody id="productTableBody">

//                         </tbody>
//                     </table>
//                     <!-- Modal and other content remains unchanged -->
//                 </div>
//             </div>
//         </div>
//     </div>

//     <script>
//         // Assume the API returns data in the format: [{product_name: "Name", product_image: "url", ...}, ...]
//         document.addEventListener('DOMContentLoaded', function() {
//           fetch('/path/to/api/endpoint') // Adjust this to your API endpoint
//             .then(response => response.json())
//             .then(data => {
//               const tableBody = document.getElementById('productTableBody');
//               data.forEach((item, index) => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                   <td class="text-center">${index + 1}</td>
//                   <td class="text-center"><img height='100px' src='${item.product_image}'></td>
//                   <td class="text-center">${item.product_name}</td>
//                   <td class="text-center">${item.product_desc}</td>
//                   <td class="text-center">${item.category_name}</td>
//                   <td class="text-center">${item.price}</td>
//                   <td class="text-center"><button class="btn btn-primary" style="height:40px" onclick="itemEditForm('${item.product_id}')">Edit</button></td>
//                   <td class="text-center"><button class="btn btn-danger" style="height:40px" onclick="itemDelete('${item.product_id}')">Delete</button></td>
//                 `;
//                 tableBody.appendChild(row);
//               });
//             })
//             .catch(error => {
//               console.error('Error fetching data:', error);
//             });
//         });
//         </script>
// </body>
// </html>
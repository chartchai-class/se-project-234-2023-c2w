// ตรวจสอบว่าฟังก์ชันถูกกำหนดอย่างถูกต้อง
exports.getProduct = (req, res) => {
    // ตรวจสอบการดำเนินการเมื่อเรียกใช้ getProduct
    console.log("Get product logic here.");
    res.send("Get product logic here.");
  };
  
  exports.addProduct = (req, res) => {
    // ตรวจสอบการดำเนินการเมื่อเรียกใช้ addProduct
    console.log("Add product logic here.");
    res.send("Add product logic here.");
  };

  exports.getAllProducts = (req, res) => {
    // Logic for getting all products
    console.log('Products data');
    res.send('Products data');
  };

  exports.updateProduct = (req, res) => {
    // Logic for updating a product
    console.log('Update product logic here.');
    res.send('Update product logic here.');
  };    

  exports.deleteProduct = (req, res) => {
    // Logic for deleting a product
    console.log('Delete product logic here.');
    res.send('Delete product logic here.');
  };

  exports.getProductById = (req, res) => {
    // Logic for getting a product by ID
    console.log('Get product by ID logic here.');
    res.send('Get product by ID logic here.');
  };

  
  
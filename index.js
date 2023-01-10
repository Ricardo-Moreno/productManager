class ProductManager {
  products;

  constructor() {
    this.products = [];
  }
  addProduct(title, description, price, thumbnali, code, stock) {
    if (
      title &&
      description &&
      price &&
      thumbnali &&
      code &&
      stock &&
      this.validarCode(code)
    ) {
      let producto = {
        id: this.getNewId(),
        title,
        description,
        price,
        thumbnali,
        code,
        stock,
      };

      this.products.push(producto);
      console.log("Producto agregado con exito");
    } else {
      console.log("Validar campos");
    }
  }
  getProduct() {
    console.log(this.products);
  }
  getProductById(id) {
    let producto = this.products.find((producto) => producto.id == id);
    if (producto) {
      console.log(producto);
    } else {
      console.log("Not Found");
    }
  }
  getNewId() {
    return this.products.length + 1;
  }
  validarCode(code) {
    let resultado = true;
    let codeFound = this.products.find((elem) => elem.code == code);
    if (codeFound) {
      resultado = false;
      console.log("codigo repetido");
    }
    return resultado;
  }
}

let productoManager = new ProductManager();
productoManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

productoManager.getProductById(1);

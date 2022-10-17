class Producto{
    constructor(nombre,precio,detalle,cantidad){
        this.nombre = nombre
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }
    impuesto(){
        return this.precio*0.15;
    }
    liquidar(){
        return this.disponible = false;
    }
    pvp(){
        return this.precio*1.15*1.20;
    }

}
var arrayProductos= [];
do{
    var comprobacion= prompt("ingrese producto (f para finalizar)");
    if (comprobacion==="f"|| comprobacion ==="F"||comprobacion==="f"){
        break;
    }else{
        nombre= comprobacion;
        var precio = prompt("precio del producto");
        var detalle = prompt("detalles del producto");
        var cantidad = prompt("stock del producto");
        arrayProductos.push(new Producto(nombre,precio,detalle,cantidad));

    }
}
while (comprobacion !="f"|| comprobacion ==="F"||comprobacion==="f")
console.log(arrayProductos);

for (var producto of  arrayProductos){
    document.write("<ul><li><h1>nombre:"+producto.nombre+"</h1></li></ul>");
    document.write("<ul><li><h1>detalle:"+producto.detalle+"</h1></li></ul>");
    document.write("<ul><li><h1>cantidad:"+producto.cantidad+"</h1></li></ul>");
    document.write("<ul><li><h1>IVA:"+producto.impuesto()+"</h1></li></ul>");
    document.write("<ul><li><h1>precio:"+producto.pvp()+"</h1></li></ul>");
    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.impuesto());

}

//pocas unidades

var ultimasUnidades = arrayProductos.filter(producto => producto.cantidad<=5);
console.log('pocas unidades en stock');
console.log(ultimasUnidades);
document.write("<h2>pocas unidades en stock</h2>");

for(var producto of ultimasUnidades){
    document.write("<ul><li><h2>nombre:"+producto.nombre+"</h2></li></ul>");
    document.write("<ul><li><h2>detalle:"+producto.detalle+"</h2></li></ul>");
    document.write("<ul><li><h2>cantidad:"+producto.cantidad+"</h2></li></ul>");
}

//sin stock

var sinStock = arrayProductos.filter(producto => producto.cantidad ==0 ||producto.disponible === false);
console.log(sinStock);
document.write("<h2>sin stock</h2>");

for(var producto of sinStock){
    document.write("<ul><li><h2>nombre:"+producto.nombre+"</h2></li></ul>");
    document.write("<ul><li><h2>detalle:"+producto.detalle+"</h2></li></ul>");
    document.write("<ul><li><h2>cantidad:"+producto.cantidad+"</h2></li></ul>");
}


//buscar por nombre 
var busquedaProducto = prompt("buscar");
var busqueda = arrayProductos.filter(producto => producto.nombre.includes(busquedaProducto));
console.log(busqueda);
document.write("<h2>buscar</h2>");

for(var producto of busqueda){
    document.write("<ul><li><h2>nombre:"+producto.nombre+"</h2></li></ul>");
    document.write("<ul><li><h2>detalle:"+producto.detalle+"</h2></li></ul>");
    document.write("<ul><li><h2>cantidad:"+producto.cantidad+"</h2></li></ul>");
}

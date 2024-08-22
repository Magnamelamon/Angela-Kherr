const Container=document.querySelector("#Articulos");
const Ruta="./json/Productos.json";


/*Creamos los articulos para que se muestre*/

function Products(data)
{

const CardContainer=document.createElement('div');
CardContainer.className="Card-Container";

const ImgContainer=document.createElement('div');
ImgContainer.className="img-container";

const DescriptionContainer=document.createElement('div');
DescriptionContainer.className="Description";

const imgProducto=document.createElement('img');
const ProductName=document.createElement('h3');
const PriceProduct=document.createElement('p');

/*Llenamos los elementos creados*/

imgProducto.src=data.Imagen;
ProductName.textContent=data.Producto;
PriceProduct.textContent=data.Precio;

/*llenamos todos los divs*/
ImgContainer.appendChild(imgProducto);
DescriptionContainer.appendChild(ProductName);
DescriptionContainer.appendChild(PriceProduct);
CardContainer.appendChild(ImgContainer);
CardContainer.appendChild(DescriptionContainer);
Container.appendChild(CardContainer);

}


fetch(Ruta)
.then (response=>response.json())
.then(data=>{
    data.forEach(Producto=>{
        Products(Producto);
    });
})
.catch(error=>{
    console.error(error)
})


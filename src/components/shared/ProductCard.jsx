
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import truncateText from "../../utils/truncateText";
import { addToCart } from "../../store/actions";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { formatPrice } from "../../utils/formatPrice";


const ProductCard = ({
    productId,
    productName,
    image,
    imageUrl,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    about = false
}) => {
    const [openProductViewModal, setopenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setselectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;
    const dispatch = useDispatch();

    const handleProductView = (product) => {
        if(!about){
        setselectedViewProduct(product);
        setopenProductViewModal(true);
        }
    }

    const addToCartHandler = (cartItems) => {
        dispatch(addToCart(cartItems , 1, toast));
    }

    return(
        <div className="shadow-xl overflow-hidden transition-shadow duration-300">
            <div onClick = {() => {
                handleProductView({
                    id: productId,
                    productName,
                    image,
                    imageUrl,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice
                })
            }} className="w-full overflow-hidden aspect-[3/2]">
                <img className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                src={imageUrl}
                alt={productName}
                >
                </img>
            </div>
            <div className="p-4">
            <h2 onClick={() => {handleProductView({
                   id: productId,
                   productName,
                   image,
                   imageUrl,
                   description,
                   quantity,
                   price,
                   discount,
                   specialPrice
            })}}
                className="text-lg font-semibold mb-2 cursor-pointer"
                >
            {truncateText(productName, 50)}
            </h2>
            <div className="min-h-20 max-h-20">
            <p className="text-gray-600 text-sm">{truncateText(description , 80)}</p>
            </div>

           {!about && (
             <div className="flex items-center justify-between mt-4">
             {specialPrice ? (
                    <div className="flex flex-col">
                    <span className="text-gray-400 line-through">
                    {formatPrice(Number(price).toFixed(2))}
                     </span>
                     <span className="text-xl font-bold text-slate-700">
                     {formatPrice(Number(specialPrice).toFixed(2))}
                     </span>
                    </div>
             ) : (
                    <div>
                      <span className="text-xl font-bold text-slate-700">
                       {"  "}  
                       {formatPrice(Number(price).toFixed(2))}
                     </span>
                    </div>
             )
             }
 
             <button 
             disabled={!isAvailable || btnLoader}
             onClick={() => addToCartHandler({
                image,
                imageUrl,
                productName,
                description,
                specialPrice,
                price,
                productId,
                quantity,
             })}
             className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}
              text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 2-36 flex`}>
                 <FaShoppingCart className="mr-2"/>
                 {isAvailable ? "Add to cart" : "Stock out"}
             </button>
             </div>
           )}
           

            </div>
            <ProductViewModal 
            open={openProductViewModal}
            setOpen={setopenProductViewModal}
            product={selectedViewProduct}
            isAvailable={isAvailable}
            />
        </div>
    );
}

export default ProductCard;
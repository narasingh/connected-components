import React, { useCallback } from 'react';
import useAddToCart from '../../hooks/useAddToCart';

const AddToCartButton = ({ productDetails, api = '', onItemAdd }) => {
    
    const [createAddToCart, { status: itemAdded }] = useAddToCart();
    const handleAddToCart = useCallback(async () => {
        await createAddToCart({ productDetails, api });
        onItemAdd(itemAdded);
    }, [createAddToCart, onItemAdd ]);

    return (
        <button onClick={handleAddToCart}>Add to Cart</button>
    )
}

export default AddToCartButton;
import React from "react";
import Item from "./Item";
const DefaultBrands = ({brands}) => {
    return (
        <div className='defaultBrands'>
            ${brands.data.getBrands.brandList.brand.map((item, key) => {
                return (
                 <Item item={item} key={key} />
                );
            })}
        </div>
    );
};
export default DefaultBrands;
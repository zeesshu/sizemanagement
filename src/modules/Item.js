import React from 'react';

const Item = ({ item }) => {
  const attributes = item.brandAttributes;
  return (
    <li className="row" onClick={rowClicked}>
      <div className="col-sm-1">
        {attributes.brandIdentifier}
      </div>
      <div className="col-sm-4">
        {attributes.brandDescription}
      </div>
      <div className="col-sm-2">
        {attributes.priceTier.referenceValueDescription}
      </div>
      <div className="col-sm-4">
        {attributes.lifestyle.referenceValueDescription}
      </div>
      <div className="col-sm-1">
        {attributes.brandTypeCode}
      </div>
    </li>
  );
};
function rowClicked() {
  console.log(event);
}
export default Item;

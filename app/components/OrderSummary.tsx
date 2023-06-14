const OrderSummary = ({ cartProducts}: any) => {
  let price = cartProducts.map((price: any) => parseInt(price.price));

  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i]; 
  }

  return (
    <div className="flex flex-col">
      <h4 className="font-bold text-xl pb-4">Order Summary</h4>

      <div className="flex justify-between pb-4">
        <label>Quantity:</label>
        <span className="text-base font-bold">{cartProducts.length}</span>
      </div>

      <div className="flex justify-between">
        <label>Sub Total:</label>
        <p className="text-base font-bold">${sum}.00</p>
      </div>

      <button className="mt-5 bg-black text-white text-sm font-semibold py-3">
        Process to checkout
      </button>
    </div>
  );
};

export default OrderSummary;

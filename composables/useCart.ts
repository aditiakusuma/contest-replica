
export type Product = {
  id: number;
  price: string;
  name: string;
  imageUrl: string;
};

export const useCart = () => {
  const cart = useState<Product[]>("cart", () => []);

  const addProduct = (product: Product) => cart.value.push(product);

  const removeProduct = (id: number) => {
    cart.value = cart.value.filter((product: Product) => product.id !== id);
  };

  const removeAllProducts = () => (cart.value = []);

  const totalProductsInCart = computed(() => cart.value.length);

  return {
    cart,
    addProduct,
    removeAllProducts,
    removeProduct,
    totalProductsInCart,
  };
};

import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CartIcon } from "@/components/atoms/CartIcon";
import { ItemsModelBox } from "@/components/organisms/ItemsModelBox";
import { productsType } from "@/constants/product";

interface ProductMenuProps {
  products: productsType[];
}

export const ProductMenu = ({ products }: ProductMenuProps) => {
  const [cartItems, setCartItems] = useState<productsType[]>([]);

  const handleAddToCart = (product: productsType) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <CartIcon cartCount={cartItems.length} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Manufacturer</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Add to Cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.manufacturer}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ItemsModelBox cartItems={cartItems} />
    </div>
  );
};

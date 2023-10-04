import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { productsType } from "@/constants/product";

interface CartTableProps {
  cartItems: productsType[];
  itemCounts?: { [key: number]: number };
}

export const CartTable = ({ cartItems, itemCounts }: CartTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name of Item</TableCell>
            <TableCell>Price of Item</TableCell>
            <TableCell>Manufacturer of Item</TableCell>
            {itemCounts && <TableCell>Quantity</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map(
            (item) =>
              item && (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.manufacturer}</TableCell>
                  <TableCell>{itemCounts && itemCounts[item.id]}</TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

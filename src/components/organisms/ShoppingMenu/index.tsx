import React, { useState } from "react";
import { Box } from "@mui/material";
import { productsType } from "@/constants/product";
import { ProductMenu } from "../ProductMenu";
import { SearchBar } from "../../molecules/SearchBar";

interface ShoppingMenuProps {
  cartItems: productsType[];
}

export const ShoppingMenu = ({ cartItems }: ShoppingMenuProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredItems = cartItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Box gap={8} padding={"56px"}>
        <SearchBar onInputChange={handleSearch} />
        <ProductMenu products={filteredItems} />
      </Box>
    </div>
  );
};

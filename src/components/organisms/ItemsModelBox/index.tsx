import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  DialogActions,
} from "@mui/material";
import { productsType } from "@/constants/product";
import { CartTable } from "../../molecules/DataTable";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: "10px",
    border: "1px solid #007bff",
    color: "#007bff",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    marginTop: "40px", 
  },
  dialogTitle: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

interface ItemsModelBoxProps {
  cartItems: productsType[];
}

export const ItemsModelBox = ({ cartItems }: ItemsModelBoxProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const itemCounts = cartItems.reduce((counts, item) => {
    counts[item.id] = (counts[item.id] || 0) + 1;
    return counts;
  }, {} as { [key: number]: number });
  const uniqueItems: productsType[] = Array.from(
    new Set(cartItems.map((item) => item.id))
  )
    .map((id) => cartItems.find((item) => item.id === id))
    .filter((item): item is productsType => item !== undefined);

  return (
    <Box style={styles.container}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setOpen(true)}
        style={styles.button}
      >
        Buy Now
      </Button>
      <Dialog open={open}>
        <DialogTitle style={styles.dialogTitle}>Your Cart</DialogTitle>
        <DialogContent>
          <CartTable cartItems={uniqueItems} itemCounts={itemCounts} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Pay</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

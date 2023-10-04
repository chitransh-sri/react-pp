import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartIconProps {
  cartCount: number;
}

export const CartIcon = ({ cartCount }: CartIconProps) => {
  return (
    <div style={{ marginLeft: "auto" }}>
      <IconButton color="inherit">
        <Badge badgeContent={cartCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

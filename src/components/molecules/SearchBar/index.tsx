import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

interface SearchBarProps {
  onInputChange: (value: string) => void;
}

export const SearchBar = ({ onInputChange }: SearchBarProps) => {
  return (
    <Grid container alignItems="center" justify="flex-start">
      <Grid item xs={12} sm={2}>
        <TextField
          label="Search"
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
          size="small"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const AddressInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        defaultValue=''
        name={name}
        render = {({ field})=> (
          <TextField
          fullWidth
        label={label}
        required={required}
        />
        )}
     />
</Grid>
);
}


export default AddressInput;

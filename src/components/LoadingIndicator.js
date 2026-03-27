import { CircularProgress, Box } from "@mui/material";

const LoadingIndicator = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginTop="50px"
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingIndicator;
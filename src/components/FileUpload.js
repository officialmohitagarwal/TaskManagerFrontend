import { Button } from "@mui/material";

const FileUpload = ({ setFile }) => {
  return (
    <Button variant="outlined" component="label">
      Upload File
      <input
        type="file"
        hidden
        onChange={(e) => setFile(e.target.files[0])}
      />
    </Button>
  );
};

export default FileUpload;
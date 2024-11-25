// Create a React component (Modal) that displays a modal dialog with content. Users can open and close the modal. Write tests to check if the modal opens and closes when triggered.

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function ModalQ6() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button data-testid="openBtn" onClick={handleOpen}>
        Open modal
      </Button>
      <Button data-testid="closeBtn" onClick={handleClose}>
        Close modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Hii From the modal
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

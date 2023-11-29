import { Box, Button } from "@mui/material";

const Controller = () => {
  return (
    <Box sx={{ mt: "50px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained">Forward</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between",pt:'20px',px:'30px' }}>
        <Button variant="contained">Left</Button>
        <Button variant="contained" sx={{ml:'15px'}}>Stop</Button>
        <Button variant="contained">Right</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", pt:'20px'}}>
        <Button variant="contained">Backward</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", pt:'90px',gap:'20px'}}>
        <Button variant="contained">Conveyor Start</Button>
        <Button variant="contained">Conveyor Stop</Button>
      </Box>
    </Box>
  );
};

export default Controller;

import { Card, CardContent, Typography } from "@mui/material";

const Video = () => {
  return (
    <div>
      <Card
        sx={{
          width: "100%",
          height: "300px",
          display: "flex",
          justifyContent:'center',alignItems:'center',
          mt:'10px',
          backgroundColor:'grey'
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Please Connect Camera Module for Visual
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Video;

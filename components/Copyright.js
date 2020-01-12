import Typography from "@material-ui/core/Typography";
import MuLink from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuLink color="inherit" href="http://localhost:3000">
        wakeAppfresh.in
      </MuLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;

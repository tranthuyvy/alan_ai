import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    color: "black",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "120px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "rgba(21, 101, 192)",
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "180px",
    padding: "5%",
    borderRadius: 10,
    color: "white",
    backgroundColor: "#873b2b",
    margin: "0 12px",
    textAlign: "center",
    height: "20vmin",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      height: "initial",
      "&:nth-of-type(1)": {
        marginBottom: "12px",
      },
    },
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "box-shadow 0.3s ease-in-out",

    "&:hover": {
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.8)",
    },
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  logoContainer: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
  VLogo: {
    height: "27vmin",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin",
    },
  },
}));

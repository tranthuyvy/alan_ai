import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "47vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",

    "&:hover": {
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.8)",
    },
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});

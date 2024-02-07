import { db_connect } from "./Database/connection";
import app from "./app";

db_connect();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

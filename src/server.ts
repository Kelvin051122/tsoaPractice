import 'module-alias/register';
import { app } from "@src/app";
import { AppDataSource } from './data-source';
const port = process.env.PORT || 3000;

app.listen(port, async() =>{
  await AppDataSource.initialize();
  console.log(`Example app listening at http://localhost:${port}`);
});
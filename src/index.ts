import { AppDataSource } from "./data-source"
import { Photo } from "./users/Photo";
 
AppDataSource.initialize().then(async () => {
    console.log("Original Data:");
    console.log(await AppDataSource.getRepository(Photo).find());
    
    console.log("Cleaning old Data...");
    await AppDataSource.getRepository(Photo).clear();
 
    console.log("Inserting new student...");
    const s = new Photo();
    s.name = "老骨灰";
    s.age = 25;
    await AppDataSource.manager.save(s);
 
    console.log("New Data:");
    console.log(await AppDataSource.getRepository(Photo).find());
}).catch(error => console.log(error))
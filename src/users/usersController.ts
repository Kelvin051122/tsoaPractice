import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    Delete,
    Put,
    Example,
    SuccessResponse,
  } from "tsoa";
  import { AppDataSource } from "@src/data-source";
  import { Photo } from "./Photo";
  const photo = new Photo()
  const photoRepository = AppDataSource.getRepository(Photo);
  @Route("/")
  export class UsersController extends Controller {
    /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
    @Example<Photo>({
        id: 0,
        name: "tsoa user",
        age: 26
    })
    @Example<Photo>({
        id: 2,
        name: "Moly",
        age: 77
    })
    @Get('/get/{Photoid}')
    public async getUser(@Path() Photoid:number) {
        try{
            const firstPhoto = await photoRepository.findOneBy({
                id: Photoid,
            })
            console.log("First photo from the db: ", firstPhoto)
            return firstPhoto
        }
        catch(err){
            console.log(err);
            return err
        }
        
    }
    /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
    @SuccessResponse("201", "Removed")
    @Delete('/delete/{Photoid}')
    public async delete(@Path() Photoid:number):Promise<object>{
        const photoToRemove:any = await photoRepository.findOneBy({
            id: Photoid
        })
        await photoRepository.delete(Photoid)
        return {"message":"OK"}
    }
    /**
   * @param requestBody Description for the request body object
   * @example requestBody  {
   *   "name": "BTP-CLOSURE-4-NE",
   *   "age": 15
   * }
   * @example requestBody  {
   *   "name": "MollyCharles",
   *   "age": 26
   * }
   */
    @SuccessResponse("201", "Created") // Custom success response
    @Post('/post')
    public async createUser(
      @Body() requestBody:any
    ): Promise<void> {
        this.setStatus(201); // set return status 201
        photo.name = requestBody.name
        photo.age = requestBody.age
        await photoRepository.insert(photo)
        console.log("Photo has been saved")
        return;
    }

    /**
   * @param requestBody Description for the request body object
   * @example requestBody  {
   *   "name": "BTP-CLOSURE-4-NE",
   *   "age": 15
   * }
   * @example requestBody  {
   *   "name": "MollyCharles",
   *   "age": 26
   * }
   */
    @Put('/update/{Photoid}')
    public async updateUser(@Body() requestBody:any,@Path() Photoid:number):Promise<object>{
        await photoRepository.update(Photoid,requestBody)
        return {"message":"OK"}
    }
  }
import express from 'express';
//import jsonfileservice'  This is for servering a user data file for testing;
import{default as jsonfileservice} from "./utils/jsonfileservice";

let router = express.Router();

class UserRouter
{
   constructor(){
     let userlog = (req, res, next) => {
       console.log('Request URL:', req.originalUrl)
       next()
     }

     let checkForSecretKey = (req, res, next)=> {
       //checkForSecretKey function
       let secret = req.query['secret'];
       if (secret !== 'fishtacos') {
         res.status(401).send('You are not authorized!');
       } else {
         next();
       }
     }
     let userlist = (req, res)=>{
       let jsfileservice = new jsonfileservice();
       var json = jsfileservice.getFile('/../../data/' + 'user.json');
            res.send(json);
     };

     //object to be returned
     let userrouter = {
       userlog: userlog,
       checkForSecretKey: checkForSecretKey,
       userlist: userlist
     };
     return userrouter;
    }

}
let userRouter = new UserRouter();

router.use(userRouter.userlog);

router.use(userRouter.checkForSecretKey);

router.get('/', userRouter.userlist);

export default router;

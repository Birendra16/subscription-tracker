import {Router} from 'express';
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>res.send({title:'GET all Subscriptions'}));

subscriptionRouter.get('/:id',(req,res)=>res.send({title:'GET Subscription Details'}));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id',(req,res)=>res.send({title:'Update Subscription'}));

subscriptionRouter.delete('/:id',(req,res)=>res.send({title:'DELETE Subscription'}));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel',(req,res)=>res.send({title:'CANCEL Subscription'}));

subscriptionRouter.get('/upcoming-renewals',(req,res)=>res.send({title:'GET upcoming Renewals'}));



export default subscriptionRouter;
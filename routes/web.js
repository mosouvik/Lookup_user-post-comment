const express=require('express');
const Route=express.Router();
const UserController=require('../controller/UserController');
const PostController=require('../controller/PostController');
const CommentController=require('../controller/CommentController');
const LookupController=require('../controller/LookupController');


//  <<.......User......>>
Route.post('/adduser',UserController.adduser);
Route.get('/getuser',UserController.getuser);

// <<......Post.......>>
Route.post('/addpost',PostController.addpost);
Route.get('/getpost',PostController.getpost);

// <<.......Comment........>>
Route.post('/addcomment',CommentController.addcomment);
Route.get('/getcomment',CommentController.getcomment);

// <<........Lookup.........>>

Route.get('/getlookup',LookupController.getlookup);


module.exports=Route
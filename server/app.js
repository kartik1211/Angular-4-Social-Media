var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

var cors = require('cors');
var app=express();
var jwt=require('jsonwebtoken');

app.use(cors());
app.use(express.static('app'));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/socialmedia');
var db=mongoose.connection;

db.on('error',function(){
    console.log('connection failed!');
})

db.on('open',function(){
    console.log('connection established!');
})

var Userschema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
     
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,

    }

})

var UserSchema_createPost=mongoose.Schema({
    postTitle:{
        type:String,
        required:true
    },
    postDescription:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    comments:{
        type:Array,
    required:true},

    likes:{
        type:Number,
        required:true

    },
  
})

var User=mongoose.model('register',Userschema);
var User2=mongoose.model('createPost',UserSchema_createPost);

app.get('/', (req,res)=>{
    res.send('Works')
})

app.post('/post', (req, res)=>{
    // res.send(req.body);
    let user=new User(req.body);
    user.save(req.body,function(err,docs){
        if(err){
            res.send(err.message);
        }else{
            res.send(docs);
        }
    });

})

app.post('/postComment',(req,res)=>{


    
// console.log(req.body);
User2.findOneAndUpdate({_id:req.body.id},{$push:{comments:req.body.comment}},{new:true},function(err,docs){
    console.log(docs);
    if(!err){

        // docs.comments.push(req.body.comments);
        res.send({
            data:docs
        });
    }else{
        res.send({
            data:err 
        })
    }
})

});

app.post('/inclikes', (req, res)=>{
    // res.send(req.body);
    // console.log(req.body);
    // let user=new User2(req.body);
    // User2.findOneAndUpdate({postTitle:req.body.postTitle},{$inc:{'likes':1}},function(err,data){
        User2.findOneAndUpdate({_id:req.body._id},{$inc:{'likes':1}},{new:true},function(err,data){
        if(!err){
            // console.log(data)
        res.json({
            success: true,
            user: data,
            
        })}else{
            res.send({
                success:false,
                user:data
            })
        }
    })
});

app.post('/createPost',(req,res)=>{
    // console.log(req.body);
   let user2=new User2( req.body);
   user2.save(req.body,function(err,docs){
    if(err){
        res.send(err);
    }else{
        res.send(docs);
    }
   })
});

app.post('/login',(req,res)=>{
  
    User.findOne({name:req.body.name},function(err,docs){
        // console.log(req.body);
        // console.log(docs);
        if(!docs){
            res.send({success:false,user:null})
        }else if(docs.password==req.body.password){
            // res.send({})


            var token=jwt.sign({docs:docs},'mysec',(err,token)=>{
                // console.log(token);
                // console.log(user);
                return res.json({token:token,success:true,user:docs});
                
            });
        

        }else{
            res.send({success:false,user:null});
        }
    })
   
})



app.get('/listposts',(req,res)=>{
    // console.log(req.body);
    User2.find({},function(err,docs){
        
        if(docs){
            // console.log(docs);
            res.send(docs);  
        //    res.send({exists:true,user:docs})
        }
        else{
            console.log('Bad req');
          
        }
   })
})

app.post('/getName',(req,res)=>{
   
    User.findOne({name:req.body.name},function(err,docs){
         if(docs){
            res.send({exists:true})
         }
         else{
             res.send({exists:false})
         }
    })

})

app.listen(4100,function(){
    console.log('Server running on port 4100');
})

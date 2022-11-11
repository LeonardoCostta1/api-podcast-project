import mongoose from 'mongoose'

const tracks = new mongoose.Schema({ 
    name: String,
    url:String,
});

const album = new mongoose.Schema({ 
    name: String,
    launch:String,
    tracks:[tracks],
});

const artistScheama = new mongoose.Schema({
    name:{ 
        type:String, 
        require:true 
    },
    resume:{
        type:String, 
    }, 
    cover:{
        type:String,  
    },
    likes:{
        type:Number, 
    },
    createdAt:{ 
        type: Date,  
        default: Date.now 
    },
    album:[album]
});
 const artistModel = mongoose.model("Artist",artistScheama);

 export default artistModel
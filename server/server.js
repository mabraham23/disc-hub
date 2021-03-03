const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var multer = require('multer');
var bodyParser = require('body-parser');
const GridFsStorage = require("multer-gridfs-storage");

mongoose.connect('mongodb+srv://web-4200:bQdK5h22i3Y4Hhtx@mydatabase.thqf4.mongodb.net/discs?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors()); 
app.use(express.static('public'))

let colors = {
    values: ['#FF0000', '#AA0000', '#550000','#FFFF00', '#AAAA00', '#555500', '#00FF00', '#00AA00', '#005500', '#00FFFF', '#00AAAA', '#005555', '#0000FF', '#0000AA', '#000055'],
    message: "That's not a color . . . idiot "
}
const Disc = mongoose.model('Disc', {
    name: {
       type: String,
       required: [true, "You must submit a disc name"],
       maxLength: [30, "Your disc name must be 30 characters or less"]
    },
    brand: {
        type: String,
        required: [true, "You must submit a disc brand"],
        enum:['Innova', 'Discraft', 'Streamline', 'Infinite', 'Dynamic Discs', 'Latitude 64', 'Westside Discs']
    },
    type: {
        type: String,
        required: [true, "You must submit a disc type"],
        enum: ['Distance Driver', 'Fairway Driver', 'Midrange', 'Putter']
    },
    weight: {
        type: Number,
        min: 0,
        max: 230,
    },
    speed: {
        type: Number,
        min: 0,
        max: 14
    },
    glide: {
        type: Number,
        min: 0,
        max: 7
    },
    turn: {
        type: Number,
        min: -5,
        max: 1
    },
    fade: {
        type: Number,
        min: 0,
        max: 5
    },
    color: {
        type: String,
        required: [true, "You must submit a disc color"],
        enum: colors
    },
});

const doc = new Disc({});

const err = doc.validateSync();
// err instanceof mongoose.Error.ValidationError; // true

var Schema = mongoose.Schema;

var ImageSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	image: {
		type: Buffer,
	}
});

var Image = mongoose.model('Image', ImageSchema);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});

var upload = multer({storage: storage}).single('myimage');

app.get('/card', function(req, res, next) {
	Image.find({Image}).then((images) => {
		res.render('index', {images: images});
	});
});

app.post('/card', (req, res) => {
	upload(req, res, (err) => {
		if (err) {
            console.log(req.body)
			return res.end('error request file');
		}
		var data = new Image({
			text: req.body.text,
			image: req.file.originalname
		});
		data.save().then((result) => {
			res.send(result);
		});
		console.log(req.file);
		res.end('upload file success');
		console.log('success');
	});
});


app.get('/discs', (req, res) => {
    // return a list of discs
    res.set("Access-Control-Allow-Origin", "*");
    Disc.find().then((discs) => {
        console.log("disc queried from DB:", discs);
        res.json(discs);
    });
});

// retrieve an existing pizza member
app.get('/discs/:discsId', (req, res) => {
    Disc.findOne({ _id: req.params.discId }).then((disc) =>{
        if (disc){
            res.json(disc);
        }
        else{
            res.sendStatus(404);
        }
    }).catch((err) => {
        res.sendStatus(400);
    })
});

app.post('/discs', (req, res) => {

    var disc = new Disc({
        name: req.body.name,
        brand: req.body.brand,
        type: req.body.type,
        weight: req.body.weight,
        speed: req.body.speed,
        glide: req.body.glide,
        turn: req.body.turn,
        fade: req.body.fade,
        color: req.body.color,
    });

    disc.save().then(() => {
        console.log('Disc Created');
        res.sendStatus(201);
    }).catch(function(err) {
    console.log(err.errors)
    if ( err.errors ) {
        var messages = {};
        for ( var e in err.errors) {
            messages[e] = err.errors[e].message;
        }
        // console.log("these are the messages", messages)
        res.status(422).json(messages);
    } else {
        // something else happened
        res.sendStatus(500);
    }
})
});


app.delete('/discs/:discId', (req, res) => {
    Disc.findByIdAndDelete(req.params.discId).then(() => {
        console.log('Disc deleted');
        res.sendStatus(204);
    });
});


// retrieve an existing pizza member
app.put('/discs/:discId', (req, res) => {
    Disc.findOne({ _id: req.params.discId}).then((disc) =>{
        if (disc){
                disc.name = req.body.name;
                disc.brand = req.body.brand;
                disc.type = req.body.type;
                disc.weight = req.body.weight;
                disc.speed = req.body.speed;
                disc.glide= req.body.glide;
                disc.turn = req.body.turn;
                disc.fade = req.body.fade;
                disc.color = req.body.color;
                
            disc.save().then(() => {
                console.log('Disc Created');
                res.sendStatus(200);
            }).catch((err) => {
                res.sendStatus(500);
            })
        }
        else{
            res.sendStatus(404);
        }
    }).catch(function(err) {
    console.log(err.errors)
    if ( err.errors ) {
        var messages = {};
        for ( var e in err.errors) {
            messages[e] = err.errors[e].message;
        }
        // console.log("these are the messages", messages)
        res.status(422).json(messages);
    } else {
        // something else happened
        res.sendStatus(500);
    }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

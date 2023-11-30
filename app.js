/**
 * This is a sample Node.js application. All of the
 * data is not accurate and is used only for the purpose
 * of  creative project #4
 */


'use strict';

const express = require('express');
const cors=require("cors");
const app = express();

const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));


//Sample data
let players = [
    {
        'id' : '0',
        'image' : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSX4n2YLQE2JceIRELRxisiFQPdeRAZFurulyeYj6TVLTHNNWme',
        'name' : 'Michael Jordan',
        'team' : 'Chicago Bulls',
        'sport' : 'Basketball',
        'stats' : {
            'points' : '32,292',
            'rebounds' : '6,672',
            'assists' : '5,633',
        },

    },

    {
        'id' : '1',
        'image' : 'https://cdn.vox-cdn.com/thumbor/TLaSlagdKOYFAff4G8cnNMJCtNo=/0x131:3272x1481/1200x800/filters:focal(1745x564:2267x1086)/cdn.vox-cdn.com/uploads/chorus_image/image/70460127/633944192.5.jpg',
        'name' : 'Tom Brady',
        'team' : 'New England Patriots',
        'sport' : 'Football',
        'stats' : {
            'passing yards' : '79,204',
            'passing touchdowns' : '581',
            'rushing touchdowns' : '22',
        }
    },

    {
        'id' : '2',
        'image' : 'https://media.cnn.com/api/v1/images/stellar/prod/220913055200-01-mike-trout-la-angels-mlb-record-spt-intl.jpg?c=original',
        'name' : 'Mike Trout',
        'team' : 'Los Angeles Angels',
        'sport' : 'Baseball',
        'stats' : {
            'batting average' : '.305',
            'home runs' : '302',
            'runs batted in' : '803',
        }
    },

    {
        'id' : '3',
        'image' : 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/LKEB6TK7VZOBFJSTJHV7CAYD6A.jpg ',
        'name' : 'Cristiano Ronaldo',
        'team' : 'Al-Nassr',
        'sport' : 'Soccer',
        'stats' : {
            'goals' : '777',
            'assists' : '224',
            'appearances' : '1035',
        }
    },
    {
        'id' : '4',
        'image' : 'https://images.wsj.net/im-9284/?width=700&height=467 ',
        'name' : 'Ichiro Suzuki',
        'team' : 'Mariners',
        'sport' : 'Baseball',
        'stats' : {
            'batting average' : '.311',
            'home runs' : '117',
            'runs batted in' : '780',
        }

    },
    {
        'id' : '5',
        'image' : 'https://ekcfbmsotzc.exactdn.com/en/blog/wp-content/uploads/2022/06/Marshawn-Lynch-1.jpg?strip=all&lossy=1&ssl=1 ',
        'name' : 'Marshawn Lynch',
        'team' : 'Seattle Seahawks',
        'sport' : 'Football',
        'stats' : {
            'Rushing Yards' : '10,413',
            'Rushing avg' : '4.3',
            'Touchdowns' : '94',
        }
    },

    {
        'id' : '6',
        'image' : 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg',
        'name' : 'Lionel Messi',
        'team' : 'Inter Miami CF',
        'sport' : 'Soccer',
        'stats' : {
            'goals' : '672',
            'assists' : '305',
            'appearances' : '778',
        }
    }



];


/**
 * GET /api/players
 *This endpoint returns all players in the players array as JSON.
 */
app.get('/api/players', function(req, res) {
    res.json(players);
});

/**
 * POST /api/players
 * This endpoint creates a new player and adds it to the players array.
 * It expects an image, name, team, and sport in the request body.
 */

app.post('/api/players', function(req, res) {
    const { image, name, team, sport } = req.body;
    if (!(image && name && team && sport)) {
        res.status(400).send("Error: Missing information");
    } else {
        const newPlayer = { id: players.length + 1, image, name, team, sport };
        players.push(newPlayer);
        res.json(newPlayer);
    }
});


/**
 * GET /api/players/summary/:id
 * This endpoint returns a text summary of a player based on the provided ID.
 * It extracts the player's ID from the URL parameter and searches for the player in the array.
 * Responds with a player summary or a 'Player not found' message if no player matches the ID.
 */

app.get('/api/players/summary/:id', function(req, res) {
    const id = req.params.id;
    const player = players.find(p => p.id === id);

    if (player) {
        const summary = `${player.name}, playing for ${player.team}, is a renowned ${player.sport} player. Some key stats: ${JSON.stringify(player.stats)}.`;
        res.type('text/plain').send(summary);
    } else {
        res.status(404).send(`Given player ${player.name} not found`);
    }
});



const PORT = process.env.PORT || 8000;
app.listen(PORT);

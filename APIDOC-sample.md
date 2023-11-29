# Pony API Documentation
The Players API provides information about random famous players.

## Get a list of all Pony's in this service.
**Request Format:** /api/players

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Return a list of all of random players.

**Example Request:** api/players/

**Example Response:**
```
 {
        'id' : '1',
        'image' : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSX4n2YLQE2JceIRELRxisiFQPdeRAZFurulyeYj6TVLTHNNWme',
        'name' : 'Michael Jordan',
        'team' : 'Chicago Bulls',
        'sport' : 'Basketball',
        'stats' : {
          
        },

    },

    {
        'id' : '2',
        'image' : 'https://cdn.vox-cdn.com/thumbor/TLaSlagdKOYFAff4G8cnNMJCtNo=/0x131:3272x1481/1200x800/filters:focal(1745x564:2267x1086)/cdn.vox-cdn.com/uploads/chorus_image/image/70460127/633944192.5.jpg',
        'name' : 'Tom Brady',
        'team' : 'New England Patriots',
        'sport' : 'Football',
        'stats' : {
          
        }
    },

    {
        'id' : '3',
        'image' : 'https://media.cnn.com/api/v1/images/stellar/prod/220913055200-01-mike-trout-la-angels-mlb-record-spt-intl.jpg?c=original',
        'name' : 'Mike Trout',
        'team' : 'Los Angeles Angels',
        'sport' : 'Baseball',
        'stats' : {
         
        }
    },

    {
        'id' : '4',
        'image' : 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/LKEB6TK7VZOBFJSTJHV7CAYD6A.jpg ',
        'name' : 'Cristiano Ronaldo',
        'team' : 'Al-Nassr',
        'sport' : 'Soccer',
        'stats' : {
        
        }
    },
    {
        'id' : '5',
        'image' : 'https://images.wsj.net/im-9284/?width=700&height=467 ',
        'name' : 'Ichiro Suzuki',
        'team' : 'Mariners',
        'sport' : 'Baseball',
        'stats' : {
       
        }

    },
    {
        'id' : '6',
        'image' : 'https://ekcfbmsotzc.exactdn.com/en/blog/wp-content/uploads/2022/06/Marshawn-Lynch-1.jpg?strip=all&lossy=1&ssl=1 ',
        'name' : 'Marshawn Lynch',
        'team' : 'Seattle Seahawks',
        'sport' : 'Football',
        'stats' : {
     
        }
    },

    {
        'id' : '7',
        'image' : 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg',
        'name' : 'Lionel Messi',
        'team' : 'Inter Miami CF',
        'sport' : 'Soccer',
        'stats' : {
        
        }
    }
...
```

**Error Handling:**
- Error missing information

## Lookup a Pony's Information
**Request Format:** /players/summary/:id

**Request Type:** GET

**Returned Data Format**: TEXT

**Description:** Randomly selected id , it returns a JSON of the stats of each player. 

**Example Request:** /players/summary/1

**Example Response:**
```json
{
        'id' : '1',
        'image' : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSX4n2YLQE2JceIRELRxisiFQPdeRAZFurulyeYj6TVLTHNNWme',
        'name' : 'Michael Jordan',
        'team' : 'Chicago Bulls',
        'sport' : 'Basketball',
        'stats' : {
            'points' : '30.1',
            'rebounds' : '6.2',
            'assists' : '5.3',
        },
    ]
}
```

**Error Handling:**
- Possible 400 (invalid request) errors (all plain text):
  - If passed in an invalid id, returns an error with the message: `Given player ${player.name} not found`

## Player Stats
**Request Format:** /summary endpoint with POST parameters of `name` and `message`

**Request Type**: POST

**Returned Data Format**: Plain Text

**Description:** Given a valid player `name` and a `points` to send, the player will reply with a plain text message response.

**Example Request:** /summary with POST parameters of `name=Michael Jordan` and `points=30.1`

**Example Response:**
```
30.1!!!
```

**Error Handling:**
- Possible 400 (invalid request) errors (all plain text):
  - If missing the pony name, an error is returned with the message: `player not found`
  - If passed in an invalid pony name, an error is returned with: `Given name {name} is not found!`
 

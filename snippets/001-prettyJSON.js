const fs = require("fs")


const data = [
  {
    "_id": "646b8f63a8a5c4c83ab55716",
    "index": 0,
    "guid": "a84b5405-e778-4993-ab62-4ba318b1378a",
    "isActive": false,
    "balance": "$1,104.40",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "blue",
    "name": "Crosby Lawson",
    "gender": "male",
    "company": "EURON",
    "email": "crosbylawson@euron.com",
    "phone": "+1 (864) 420-2498",
    "address": "784 Lester Court, Crayne, Minnesota, 6975",
    "about": "Cupidatat ipsum qui laborum qui aute deserunt labore excepteur cillum. Ipsum eu duis ea elit nulla eiusmod. Pariatur ad veniam minim officia velit elit ad. Pariatur nostrud exercitation aliquip ex tempor dolor excepteur sit commodo sint commodo. Fugiat dolore eiusmod voluptate dolor esse dolore elit aute officia id elit est. In elit magna qui nulla aute consectetur ad ipsum et anim do deserunt nulla minim.\r\n",
    "registered": "2019-06-12T02:58:32 +04:00",
    "latitude": -63.441768,
    "longitude": 97.35794,
    "tags": [
      "occaecat",
      "ipsum",
      "veniam",
      "ullamco",
      "in",
      "ea",
      "et"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Clements Shannon"
      },
      {
        "id": 1,
        "name": "Larsen Holman"
      },
      {
        "id": 2,
        "name": "Heather Yates"
      }
    ],
    "greeting": "Hello, Crosby Lawson! You have 2 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "646b8f639a5a04c37937ce99",
    "index": 1,
    "guid": "19b9a6e5-035a-4b67-896f-81234a6a5d0d",
    "isActive": true,
    "balance": "$3,470.86",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "Lynne Wright",
    "gender": "female",
    "company": "ORBIFLEX",
    "email": "lynnewright@orbiflex.com",
    "phone": "+1 (811) 537-2360",
    "address": "711 Jefferson Avenue, Veguita, Northern Mariana Islands, 1825",
    "about": "Do deserunt enim non culpa dolor Lorem minim Lorem Lorem. Aute consequat aute dolor laborum anim consequat veniam reprehenderit. Ex anim sint nisi Lorem esse. Reprehenderit dolor minim nostrud ullamco amet.\r\n",
    "registered": "2021-12-12T01:31:41 +05:00",
    "latitude": -68.459186,
    "longitude": -83.1663,
    "tags": [
      "qui",
      "sunt",
      "laboris",
      "eiusmod",
      "pariatur",
      "et",
      "consectetur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Angelia Barron"
      },
      {
        "id": 1,
        "name": "Carol Kidd"
      },
      {
        "id": 2,
        "name": "Oneal Terry"
      }
    ],
    "greeting": "Hello, Lynne Wright! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "646b8f63c453ec7f40d4b08f",
    "index": 2,
    "guid": "01a30aa1-80bc-4cf3-a2b2-c7612f8d4317",
    "isActive": true,
    "balance": "$3,514.83",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": "Helga Oliver",
    "gender": "female",
    "company": "LOTRON",
    "email": "helgaoliver@lotron.com",
    "phone": "+1 (940) 497-2562",
    "address": "260 Bragg Street, Chical, Utah, 6290",
    "about": "Culpa ea consequat dolor pariatur. Occaecat Lorem mollit sit ex aliquip nostrud. Excepteur commodo officia aliqua enim incididunt proident aliquip id. Proident irure pariatur irure ipsum cillum sint.\r\n",
    "registered": "2022-04-23T08:06:52 +04:00",
    "latitude": 3.230719,
    "longitude": -34.826484,
    "tags": [
      "esse",
      "anim",
      "sit",
      "eu",
      "voluptate",
      "ipsum",
      "labore"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Contreras Bauer"
      },
      {
        "id": 1,
        "name": "Jan Knox"
      },
      {
        "id": 2,
        "name": "Luz Mckinney"
      }
    ],
    "greeting": "Hello, Helga Oliver! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "646b8f6386290a0ec6215857",
    "index": 3,
    "guid": "f956f237-ef0d-44de-b90e-1336fd8c5603",
    "isActive": true,
    "balance": "$2,115.89",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": "Hurley Sexton",
    "gender": "male",
    "company": "KIDSTOCK",
    "email": "hurleysexton@kidstock.com",
    "phone": "+1 (981) 508-3773",
    "address": "100 Meserole Street, Eden, Vermont, 8729",
    "about": "Veniam aliqua ex est laboris aliqua aliquip duis tempor minim ullamco ut nisi. Ipsum adipisicing sit deserunt velit nisi aliquip sint sint laboris. Irure laborum pariatur irure esse aliquip. Voluptate adipisicing occaecat ad nisi esse Lorem occaecat quis occaecat dolore nisi deserunt. Laboris officia est aliquip mollit enim ipsum ipsum mollit ut minim eiusmod ut.\r\n",
    "registered": "2017-02-11T02:17:38 +05:00",
    "latitude": -58.523246,
    "longitude": 39.454835,
    "tags": [
      "irure",
      "id",
      "duis",
      "excepteur",
      "ad",
      "occaecat",
      "sint"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Nguyen Duncan"
      },
      {
        "id": 1,
        "name": "Britt Merritt"
      },
      {
        "id": 2,
        "name": "Holden Dale"
      }
    ],
    "greeting": "Hello, Hurley Sexton! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "646b8f633ad09800d2406855",
    "index": 4,
    "guid": "38749aba-31c0-485f-b505-6c9e84a85685",
    "isActive": false,
    "balance": "$2,873.25",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Regina Berry",
    "gender": "female",
    "company": "EXOSWITCH",
    "email": "reginaberry@exoswitch.com",
    "phone": "+1 (843) 481-2738",
    "address": "826 Quentin Road, Villarreal, Tennessee, 8940",
    "about": "Sunt commodo commodo laborum sit nisi id ad sit occaecat aliqua mollit ad. Occaecat eiusmod aliquip irure exercitation elit nulla in incididunt amet adipisicing cupidatat est nostrud occaecat. Velit proident voluptate non duis nulla id eu do culpa commodo. Veniam deserunt amet proident Lorem eu ullamco cillum esse tempor aliqua consequat ipsum.\r\n",
    "registered": "2021-04-11T01:33:43 +04:00",
    "latitude": 81.878412,
    "longitude": -4.582303,
    "tags": [
      "voluptate",
      "sit",
      "commodo",
      "tempor",
      "in",
      "aute",
      "magna"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Dodson Cook"
      },
      {
        "id": 1,
        "name": "Horn Browning"
      },
      {
        "id": 2,
        "name": "Bettye Cooley"
      }
    ],
    "greeting": "Hello, Regina Berry! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  }
]

// console.log(JSON.stringify(data)) // in one line, hard to read
const strData = JSON.stringify(data, null, 2) // replacer, indent
console.log(strData)

fs.writeFileSync('./output.txt', strData)
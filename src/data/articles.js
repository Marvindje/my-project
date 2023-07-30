const articles = [
    {
        "id": "1",
        "price": 10.99,
        "type": "t-shirt",
        "description": "t-shirt blanc simple pour hommes",
        "name": "T-shirt blanc M homme ",
        "image": '/articles/anomaly-WWesmHEgXDs-unsplash.jpg'
    },
    {
        "id": "2",
        "price": 10.99,
        "type": "t-shirt",
        "description": "t-shirt motifs pour hommes",
        "name": "T-shirt motifs M homme ",
        "image": '/articles/bao-bao-TysFvOl78u0-unsplash.jpg'
    },
    {
        "id": "3",
        "price": 25.99,
        "type": "accessories",
        "description": "Collier Argenté minimaliste pour femmes ",
        "name": "Accessoire pour femmes , collier",
        "image": '/articles/camila-seves-espasandin-o4RpLOAF2OA-unsplash.jpg'
    },
    {
        "id": "4",
        "price": 50.99,
        "type": "accessories",
        "description": "Montre collection pour femmes couleur Vert",
        "name":"Accessoire pour femmes , montre",
        "image": '/articles/lola-rose-840tjesh9ww-unsplash.jpg'
    },
    {
        "id": "5",
        "price":50.99,
        "type": "accessories",
        "description": "Sacs à main collection pour femmes ",
        "name":"Sacs blue collection",
        "image": '/articles/kelsey-curtis-oB_d7fqHHiU-unsplash.jpg'
    },
    {
        "id": "6",
        "price":100,
        "type": "accessories",
        "description": "Bracelet diamants Femmes collection 2023",
        "name":"Bracelet femmes en Diamants",
        "image": '/articles/jesus-eca-vr0q87dQQfA-unsplash.jpg'
    },
    {
        "id": "7",
        "price":35.99,
        "type": "shirts",
        "description": "Pull oversize hommes/femmes en coton",
        "name":"Pulls hommes / femmes  ",
        "image": '/articles/pesce-huang-vJ9DTh6zkR4-unsplash.jpg'
    },
    {
        "id": "8",
        "price": 15.99,
        "type": "shirts",
        "description": "Pulls oversize hommes / femmes en coton et polyester",
        "name": "Pull hommes / femmes",
        "image": '/articles/pesce-huang-zZ0x29L7kKw-unsplash.jpg'
    },
    {
        "id": "9",
        "price": 65.99,
        "type": "shirts",
        "description": "Notre collection de colliers et bracelets assortis en plaqués or",
        "name": "Collier & Bracelets en chaînes plaqué or ",
        "image": '/articles/sama-hosseini-GtOo17K-vTg-unsplash.jpg'
    },
    {
        "id": "10",
        "price": 15.99,
        "type": "shirts",
        "description": "Nos collections de gilets  cols roulés pour hommes / femmes ",
        "name": "Pulls cols roulés couleurs pastels",
        "image": '/articles/sama-hosseini-N2ZqRuvNcUw-unsplash.jpg'
    },
    {
        "id": "11",
        "price": 35.99,
        "type": "shirts",
        "description": "Pull col roulé oversize pour femmes ",
        "name": "Pull col roulé couleur orange ",
        "image": '/articles/sama-hosseini-fSdBxY0NxVI-unsplash.jpg'
    },
    {
        "id": "12",
        "price": 15.99,
        "type": "accessories",
        "description": "Bracelet en chaîne or plaqué",
        "name": "Bracelet en chaîne or plaqué",
        "image": '/articles/sama-hosseini-h_ssRPj8UZo-unsplash.jpg'
    },
    {
        "id": "13",
        "price": 155.99,
        "type": "shirts",
        "description": "Lot de sacs et produits de beauté hommes",
        "name": "Accessoires beauté et sacs à dos pour hommes",
        "image": '/articles/screen-post--Obuf8Pzs3w-unsplash.jpg'
    },
    {
        "id": "14",
        "price": 155.99,
        "type": "shirts",
        "description": "Lot de robes second choix femmes",
        "name": "Robes d'occasion de seconde main pour femmes",
        "image": '/articles/sergi-dolcet-escrig-D3Lma0WWx4A-unsplash.jpg'
    },
    {
        "id": "15",
        "price": 25.99,
        "type": "shirts",
        "description": "image non fonctionnelle",
        "name": " error",
        "image": '/articles/sindre-aalberg-ajEo1K1U0s-unsplash.jpg'
    },
    {
        "id": "16",
        "price": 45.99,
        "type": "accessoires",
        "description": "Sac 100% cuir à lanières pour hommes et femmes",
        "name": "Sacs collection cuir",
        "image": '/articles/sindre-aalberg-q1Wd5MJvcKo-unsplash.jpg'
    },
    {
        "id": "17",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for trinh-minh-th-ScYGyGhA9HQ-unsplash.jpg",
        "name": "trinh-minh-th-ScYGyGhA9HQ-unsplash",
        "image": '/articles/trinh-minh-th-ScYGyGhA9HQ-unsplash.jpg'
    },
    {
        "id": "18",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for vonecia-carswell-0aMMMUjiiEQ-unsplash.jpg",
        "name": "vonecia-carswell-0aMMMUjiiEQ-unsplash",
        "image": '/articles/vonecia-carswell-0aMMMUjiiEQ-unsplash.jpg'
    },
    {
        "id": "19",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for warion-taipei-Gb3wBsGr_mQ-unsplash.jpg",
        "name": "warion-taipei-Gb3wBsGr_mQ-unsplash",
        "image": '/articles/warion-taipei-Gb3wBsGr_mQ-unsplash.jpg'
    },
    {
        "id": "20",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
        "name": "jingxi-lau-7m0Y-vhyDGE-unsplash",
        "image": '/articles/jingxi-lau-7m0Y-vhyDGE-unsplash.jpg'
    },
    {
        "id": "21",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
        "name": "jingxi-lau-7m0Y-vhyDGE-unsplash",
        "image": '/articles/jingxi-lau-7m0Y-vhyDGE-unsplash.jpg'
    },
    {
        "id": "22",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
        "name": "jingxi-lau-7m0Y-vhyDGE-unsplash",
        "image": '/articles/jingxi-lau-7m0Y-vhyDGE-unsplash.jpg'
    },
    {
        "id": "23",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
        "name": "jingxi-lau-7m0Y-vhyDGE-unsplash",
        "image": '/articles/jingxi-lau-7m0Y-vhyDGE-unsplash.jpg'
    },
    {
        "id": "24",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
        "name": "jingxi-lau-7m0Y-vhyDGE-unsplash",
        "image": '/articles/jingxi-lau-7m0Y-vhyDGE-unsplash.jpg'
    },
    {
        "id": "25",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
        "name": "jingxi-lau-7m0Y-vhyDGE-unsplash",
        "image": '/articles/jingxi-lau-7m0Y-vhyDGE-unsplash.jpg'
    },
    {
        "id": "26",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
        "name": "jingxi-lau-7m0Y-vhyDGE-unsplash",
        "image": '/articles/jingxi-lau-7m0Y-vhyDGE-unsplash.jpg'
    },
    {
        "id": "27",
        "price": 15.99,
        "type": "shirts",
        "description": "Description for jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
        "name": "jingxi-lau-7m0Y-vhyDGE-unsplash",
        "image": '/articles/jingxi-lau-7m0Y-vhyDGE-unsplash.jpg'
    }
];

export default articles ;

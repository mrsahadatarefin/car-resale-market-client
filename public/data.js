const categories = [
    {
        "category":"electric car",
        "category_id":"1"
    },
    {
        "category":"Ferrari car",
        "category_id":"2"
    },
    {
        "category":"rolls royce",
        "category_id":"3"
    }
]


const getCategoryWiseProduct = (categoryName) => {
    if(!categoryName) return products;
    return products.filter(product => product.category === categoryName);
}
const products = [
    {    
        "category":"electric car",
        "category_id":"1",
        "name":"Tesla Model 3",
        "description": "The model 3 merits consideration as a compact luxury sedan and electric car Although a sparse interior layout wont appeal to everyone",
        "image": "https://www.motortrend.com/uploads/2022/02/2022-Tesla-Model-3-5.jpg?fit=around%7C1000:625",
        "price":"2990",
        "originalPrice":"20000",
        "useTime":"2",
        "date":"01-11-2022",
        "rating":"4.5"

},

{
    "category":"electric car",
    "category_id":"1",
    "name":"Chevrolet Bolt Ev",
    "description": "The second generation bolt ev still delivers decent performance usable electric range and  tech but the redesign does no t ",
    "image": "https://www.motortrend.com/uploads/2022/06/2023-Chevrolet-Bolt-EV-37.jpg?fit=around%7C875:492.1875",
    "price":"2102",
    "originalPrice":"20000",
        "useTime":"2",
        "date":"01-11-2022",
    "rating":"4.5"
},
{
    "category":"electric car",
    "category_id":"1",
    "name":"Hyundai  5",
    "description": " The Hyundai Tuscon does finish above average at 5 and 7 years and the  is slightly ahead at year 5 and 7 as well. The Sonata how ever is not a bright .",
   
    "image": "https://www.motortrend.com/uploads/2021/10/2022-Kia-Niro-EV-90.jpg?fit=around%7C875:492.1875",
    "price":"2100",
    "originalPrice":"20000",
        "useTime":"2",
        "date":"01-11-2022",
    "rating":"4.5"
},
{
    "category":"Ferrari car",
    "category_id":"2",
    "name":"Ferrari Roma",
    "description": "The FF has had one of the hardest depreciation curves for a Ferrari in recent times, but the  seems to fair better as it does not have .",
    "image": "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_540,q_auto:good,w_960/cms/uploads/a62dw8mbueqdxs0zqp9z",
    "price":"2100",
    "originalPrice":"20000",
        "useTime":"2",
        "date":"01-11-2022",
    "rating":"4.5"
},
{
    "category":"Ferrari car",
    "category_id":"2",
    "name":"Ferrari GTC4 ",
    "description": "The Roma costs just shy of £175,000, which includes a four-year warranty (for UK customers) and seven-year Genuine Maintenance package.",
    "image": "https://cdn.autoportal.com/img/new-cars-gallery/ferrari/gtc4-lusso/exterior/ferrari-gtc4-lusso-951d94dc.jpg",
    "price":"2200",
    "originalPrice":"20000",
        "useTime":"2",
        "date":"01-11-2022",
    "rating":"4.5"
},
{
    "category":"rolls royce",
    "category_id":"3",
   "name":"rolls royce phantom ",
    "description": "The Phantom uses an  chassis; this is a version of Rolls-Royce's modular Architecture of Luxury platform. The Phantom is the first car to be based on this new platform, which is also used by the  SUV and will be used by other future Rolls-Royce models.",
    "image": "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=",
    "price":"2200",
    "originalPrice":"20000",
    "useTime":"2",
    "date":"01-11-2022",

        "rating":"4.5"
},
{
    "category":"rolls royce",
    "category_id":"3",
    "name":"rolls royce ghost ",
    "description": "The Rolls-Royce Ghost is a full-sized luxury car manufactured by Rolls-Royce Motor Cars. The Ghost nameplate, named in honour of the Silver Ghost,",
    "image": "https://media.ed.edmunds-media.com/rolls-royce/ghost/2021/oem/2021_rolls-royce_ghost_sedan_base_fq_oem_1_815.jpg",
    "price":"2200",


    "originalPrice":"20000",
        "useTime":"2",
        "date":"01-11-2022",
    "rating":"4.5"
}





]
const featuredTours = [
  {
    tourLink:
      "https://www.viator.com/en-AU/tours/Rome/Skip-the-Line-Colosseum-Roman-Forum-and-Palatine-Hill-Tour/d511-15932P15",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-360x240/08/ba/a5/2c.jpg",
    cost: "$75",
    tourname: "Colosseum, Roman Forum, and Palatine Hill Tour",
    tourdescription:
      "Head into the Colosseum to walk in the footsteps of gladiators, emperors, and plebeians as the tales of the brutal games ring in your ears.",
    reviews: "3306 reviews",
    hours: "Approximately 3 hours",
  },

  {
    tourLink:
      "https://www.viator.com/en-AU/tours/Hanoi/3-Day-Halong-Bay-Cruise-and-Cat-Ba-Island-Tour/d351-8093P1?m=64818&supag=156273090390&supsc=dsa-1583450326707&supai=669721762251&supap=&supdv=c&supnt=g&suplp=9071328&supli=&supti=dsa-1583450326707&tsem=true&supci=dsa-1583450326707&supap1=&supap2=&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdoTXpOD9v9xrbBmjkkWH2mVqw38tqU_trp0j72I0fciFuixY6PwLU0aAjyZEALw_wcB",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-360x240/0f/51/23/41.jpg",
    cost: "$265",
    tourname:
      "3-Day Halong Paradise - Lan Ha Bay, Cat Ba Island, Swim, Cave, Trek",
    tourdescription:
      "Includes the world's most famous natural wonders on a unique experiential tour that can only be found here. Many of the most beautiful destinations in Vietnam.",
    reviews: "61 reviews",
    hours: "3 days",
  },

  {
    tourLink:
      "https://www.viator.com/en-AU/tours/Cairns-and-the-Tropical-North/Great-Barrier-Reef-Diving-and-Snorkeling-Cruise-from-Cairns/d754-3253OSPREY?m=64818&supag=156273090390&supsc=dsa-1583450326707&supai=669721762254&supap=&supdv=c&supnt=g&suplp=9071328&supli=&supti=dsa-1583450326707&tsem=true&supci=dsa-1583450326707&supap1=&supap2=&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdr_OZOlvoEYAeUwBxQUDk7c0igx1vODZzYiK_VEuNuEesTDHGi_R-oaAlysEALw_wcB",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/71/d7/26.jpg",
    cost: "$240",
    tourname: "Great Barrier Reef Snorkeling and Diving Cruise from Cairns",
    tourdescription:
      "Experience one of the wonders of the natural world up close and personal on this snorkeling and diving cruise on the Great Barrier Reef.",
    reviews: "2582 reviews",
    hours: "Approximately 8 hours 30 Minutes",
  },

  {
    tourLink:
      "https://www.fattiretours.com/munich/tours/munich-city-segway-tour/",
    image:
      "https://www.fattiretours.com/app/uploads/2022/03/munich-full-segway-english-hero-slider-large-1-900x600.jpg",
    cost: "$75",
    tourname: "Munich Classic City Segway Tour",
    tourdescription:
      "Our Munich Classic City Segway Tour is the perfect tour for both those new to the city and Munich veterans.",
    reviews: "97 reviews",
    hours: "Approximately 3.5 hours",
  },

  {
    tourLink:
      "https://www.viator.com/en-AU/tours/Tokyo/Mt-Fuji-Lake-Ashi-and-Bullet-Train-Day-Trip-from-Tokyo/d334-2142TYO_F800_F820",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/5b/db.jpg",
    cost: "$199",
    tourname:
      "Mt Fuji, Hakone Lake Ashi Cruise Bullet Train Day Trip from Tokyo",
    tourdescription:
      "Join a full-day guided tour from Tokyo that travels to Mt Fuji, then continues to nearby Lake Ashi and the Mt Komagatake Ropeway.",
    reviews: "5248 reviews",
    hours: "Approximately 11 hours 30 Minutes",
  },

  {
    tourLink:
      "https://www.viator.com/en-AU/tours/Halong-Bay/2-days-1-night-at-GREAT-boat-included-transfer-kayak-cave-island-tours-meals/d22692-100902P7",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/6f/41/11.jpg",
    cost: "$97",
    tourname: "Best Seller - 2 Day/1 Night Cruise with ALl-Inclusive in Halong",
    tourdescription:
      "Spend 2 days cruising around Halong Bay, Lan Ha Bay or Bai Tu Long Bay.",
    reviews: "2412 reviews",
    hours: "2 Days",
  },

  {
    tourLink:
      "https://www.viator.com/en-AU/tours/Phuket/Phi-Phi-Day-Trip-with-Seaview-Lunch/d349-160694P9",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-360x240/08/a3/6b/14.jpg",
    cost: "$80",
    tourname: "Phi Phi Islands Day Tour from Phuket",
    tourdescription:
      "A must-visit while in Phuket, the Phi Phi archipelago consists of six islands off the coast of Krabi.",
    reviews: "203 reviews",
    hours: "Approximately 9 hours",
  },

  {
    tourLink:
      "https://www.fattiretours.com/berlin/tours/berlin-highlights-bike-tour/",
    image:
      "https://www.fattiretours.com/app/uploads/2022/03/berlin-highlights-bike-tour-highlights-tour-gendarmenmarkt2-1290x728.jpg",
    cost: "$32",
    tourname: "Berlin Highlights Bike Tour",
    tourdescription:
      "Come and see the best of Berlin in our amazing three-hour tour! You'll pass by many great hidden gems.",
    reviews: "145 reviews",
    hours: "Approximately 3 hours",
  },

  {
    tourLink:
      "https://www.fattiretours.com/paris/tours/vip-versailles-bike-tour/",
    image:
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/y6yu7dv29fqaswrydbai/VersaillesSmallGroupVIPBikeTour.jpg",
    cost: "$165",
    tourname: "Small Group VIP Versailles Bike Tour",
    tourdescription:
      "This is the ultimate way to see everything that Versailles has to offer! Many people venture to this 16th century palace.",
    reviews: "180 reviews",
    hours: "Approximately 8.5 hours",
  },
];

export default featuredTours;

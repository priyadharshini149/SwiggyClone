import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/image/logo.png"

//##################################################################################################################

/*
food ordering app
- header
    . logo
    . links
        * home
        * contact
        * cart
- body
    . search bar
    . card container
        * card --- image,name of rest,rating,cuisine,delivary tym
- footer
    . copyright
    . links
*/
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


const RestoCard= (props) =>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;
    const {deliveryTime}=resData.info.sla;
    return(
        <div className="resto-card">
           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="food-img" alt="image"></img>
           <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <div style={{display:"flex"}} className="card-review">
            <span>{avgRating} stars</span>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
           </div>
        </div>
    );

};
const resList= [
    {
          "info": {
            "id": "82488",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
            "locality": "Avinash Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream",
              "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "82488",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2900
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2900
            },
            "parentId": "2233",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-avinash-road-peelamedu-coimbatore-82488",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "50958",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "nmuvxvvmtaxei2ifckwj",
            "locality": "Avinash Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "50958",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2900
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2900
            },
            "parentId": "2456",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 35,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 02:55:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-avinash-road-peelamedu-coimbatore-50958",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "50793",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Avinashi Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "50793",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 6500
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 6500
            },
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 4.5,
              "serviceability": "SERVICEABLE",
              "slaString": "27 mins",
              "lastMileTravelString": "4.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-avinashi-road-peelamedu-coimbatore-50793",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "67645",
            "name": "Night Lion by Madhampatty Pakashala",
            "cloudinaryImageId": "qgck9fzi17ljdvwboljb",
            "locality": "Gauthama Puri Nagar",
            "areaName": "Peelamedu",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Chinese",
              "Haleem"
            ],
            "avgRating": 3.9,
            "feeDetails": {
              "restaurantId": "67645",
              "fees": [
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3700
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3700
            },
            "parentId": "377170",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/night-lion-by-madhampatty-pakashala-gauthama-puri-nagar-peelamedu-coimbatore-67645",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "67833",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "sathy main road",
            "areaName": "Sivanandhapuram",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
              "restaurantId": "67833",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 8200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 8200
            },
            "parentId": "5588",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 7.3,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "7.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-sathy-main-road-sivanandhapuram-coimbatore-67833",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "464548",
            "name": "EatFit - All Things Healthy",
            "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
            "locality": "Ramanandha Nagar",
            "areaName": "Saravanampatty",
            "costForTwo": "₹270 for two",
            "cuisines": [
              "Chinese",
              "Healthy Food",
              "Tandoor",
              "Pizzas",
              "North Indian",
              "Thalis",
              "Biryani"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "464548",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 8200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 8200
            },
            "parentId": "76139",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 7.6,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "7.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/eatfit-all-things-healthy-ramanandha-nagar-saravanampatty-coimbatore-464548",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "530139",
            "name": "Kaati Zone Rolls & Wraps",
            "cloudinaryImageId": "zy2y8xax611wtxirnxf2",
            "locality": "Thaneerpandhal Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Fast Food",
              "Bengali",
              "Beverages",
              "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "530139",
              "fees": [
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2900
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2900
            },
            "parentId": "248306",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-thaneerpandhal-road-peelamedu-coimbatore-530139",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "530148",
            "name": "Indiana Burgers",
            "cloudinaryImageId": "regvsmrmcnb3vngtmvlr",
            "locality": "Thaneerpandhal Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Beverages",
              "Desserts"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "530148",
              "fees": [
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2900
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2900
            },
            "parentId": "5714",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/indiana-burgers-thaneerpandhal-road-peelamedu-coimbatore-530148",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "527155",
            "name": "Momo Zone - The Momo Company",
            "cloudinaryImageId": "dwpzamnmdl9fjze6345c",
            "locality": "Thaneerpandhal Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Chinese",
              "Tibetan",
              "Fast Food"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "527155",
              "fees": [
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2900
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2900
            },
            "parentId": "382343",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-thaneerpandhal-road-peelamedu-coimbatore-527155",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "530135",
            "name": "WarmOven Cake & Desserts",
            "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
            "locality": "Thaneerpandhal Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages"
            ],
            "avgRating": 3.7,
            "feeDetails": {
              "restaurantId": "530135",
              "fees": [
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2900
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2900
            },
            "parentId": "9696",
            "avgRatingString": "3.7",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-thaneerpandhal-road-peelamedu-coimbatore-530135",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "530145",
            "name": "Cupcake Bliss Cake & Desserts",
            "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
            "locality": "Thaneerpandhal Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages"
            ],
            "avgRating": 3.7,
            "feeDetails": {
              "restaurantId": "530145",
              "fees": [
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2900
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2900
            },
            "parentId": "66732",
            "avgRatingString": "3.7",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-thaneerpandhal-road-peelamedu-coimbatore-530145",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "50314",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "DB Road",
            "areaName": "RS Puram",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.8,
            "feeDetails": {
              "restaurantId": "50314",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 11200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 11200
            },
            "parentId": "721",
            "avgRatingString": "3.8",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 63,
              "lastMileTravel": 9.7,
              "serviceability": "SERVICEABLE",
              "slaString": "63 mins",
              "lastMileTravelString": "9.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-db-road-rs-puram-coimbatore-50314",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "50456",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Brookefields Mall",
            "areaName": "R S Puram West",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "50456",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 9700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 9700
            },
            "parentId": "166",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 9,
              "serviceability": "SERVICEABLE",
              "slaString": "41 mins",
              "lastMileTravelString": "9.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-brookefields-mall-r-s-puram-west-coimbatore-50456",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "56504",
            "name": "McDonald's",
            "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
            "locality": "Brookefields Mall",
            "areaName": "RS Puram",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "56504",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 9700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 9700
            },
            "parentId": "630",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 42,
              "lastMileTravel": 9,
              "serviceability": "SERVICEABLE",
              "slaString": "42 mins",
              "lastMileTravelString": "9.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 00:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-brookefields-mall-rs-puram-coimbatore-56504",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "298193",
            "name": "Kovai Kitchen - Fairfield by Marriott Coimbatore",
            "cloudinaryImageId": "bccdmgcd8yeckqzain5k",
            "locality": "Airport Road",
            "areaName": "Sitra",
            "costForTwo": "₹649 for two",
            "cuisines": [
              "Indian",
              "Continental"
            ],
            "avgRating": 3.7,
            "feeDetails": {
              "restaurantId": "298193",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3700
            },
            "parentId": "120381",
            "avgRatingString": "3.7",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 03:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kovai-kitchen-fairfield-by-marriott-coimbatore-airport-road-sitra-coimbatore-298193",
            "type": "WEBLINK"
          }
        }];
  
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <form>
                  <input type="text" placeholder="search"></input>
                </form>
            </div>
            <div className="resto-container">
              {/* <RestoCard name="Meghana Foods" cusine="Biryani, north indian,asian" rating="4.5 stars" duration="35 minutes"/>
               <RestoCard name="KFC" cusine="Biryani, north indian,asian" rating="4.3 stars" duration="30 minutes"/> */}
               {resList.map(restaurant=>(
               <RestoCard key={restaurant.info.id} resData={restaurant}/>
               ))}
               
            </div>

        </div>
    );
};
const App = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);




//###################################################################################################################
//const heading=React.createElement("h1",{id:"header_1"},"Hello World with react"); //created h1 tag
// const jsxheading=<h1>Hello World with react</h1>

//react element
// const heading=<h1>Hello world with react element !!!</h1>

// const Title = () => (
//     <h1>Hello world</h1>
// );
//react functional component
// const Heading= () => (
//     <div>
//         <Title/> 
//         <h1>Hello world with react component !!!</h1>
//     </div>
    
// );// component composition


//const root= ReactDOM.createRoot(document.getElementById("root")); //create root

//root.render(<Heading/>);  //rendering react component


// const parent=React.createElement("div",{id:"parent"},
// [
//     React.createElement("div",{id:"child1"},
// [React.createElement("h1",{}," i am h1 tag"),
// React.createElement("h2",{},"i am h2 tag")
// ]),

// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{}," i am h1 tag"),
// React.createElement("h2",{},"i am h2 tag")
// ])
// ]
// );

// console.log(parent);
// root.render(parent);


interface deals {
    id:string;
    description:string;
    url:string;
}
;

export interface Interface {
    avg_price:number;
    review_count:number;
    review_list_url:string[];
    distance:number;
    business_url:string;
    photo_url:string;
    s_photo_url:string;
    photo_count:number;
    photo_list_url:string[];
    has_coupon:number;
    coupon_id:number;
    coupon_description:string;
    coupon_url:string;
    has_deal:number;
    deal_count:number;
    deals:deals[];
    has_online_reservation:number;
    online_reservation_url:string;
    business_id:number;
    name:string;
    branch_name:string;
    address:string;
    telephone:string;
    city:string;
    regions:string[];
    categories:string[];
    latitude:number;
    longitude:number;
    avg_rating:number;
    rating_img_url:string;
    rating_s_img_url:string;
    product_grade:number;
    decoration_grade:number;
    service_grade:number;
    product_score:number;
    decoration_score:number;
    service_score:number;
}

export const Schema = {
    avg_price: Number,
    review_count: Number,
    review_list_url: [String],
    distance: Number,
    business_url: String,
    photo_url: String,
    s_photo_url: String,
    photo_count: Number,
    photo_list_url: [String],
    has_coupon: Number,
    coupon_id: Number,
    coupon_description: String,
    coupon_url: String,
    has_deal: Number,
    deal_count: Number,
    deals: [{
        id: String,
        description: String,
        url: String
    }],
    has_online_reservation: Number,
    online_reservation_url: String,
    business_id: Number,
    name: String,
    branch_name: String,
    address: String,
    telephone: String,
    city: String,
    regions: [String],
    categories: [String],
    latitude: Number,
    longitude: Number,
    avg_rating: Number,
    rating_img_url: String,
    rating_s_img_url: String,
    product_grade: Number,
    decoration_grade: Number,
    service_grade: Number,
    product_score: Number,
    decoration_score: Number,
    service_score: Number,
};

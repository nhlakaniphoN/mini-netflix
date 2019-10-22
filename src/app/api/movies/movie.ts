type genres={
    id:string;
    name:string;
}
type details={
     title:string;
     revenue: string;
     genres:genres[];
     description?:string;


}
export interface Imovie{

    id:string;
    title:string;
    image_url:string;
    year:string;
    details:details;
}
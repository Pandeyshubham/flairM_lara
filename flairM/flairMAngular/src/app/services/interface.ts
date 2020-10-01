export class User{
    id:number;
    name:string;
    email:string;
}

export class Organization{
    orgainization_id:number;
    orgainization_name:string;
    orgainization_logo_url:string;
    orgainization_email	:string;
}

export class Contact{
    contact_id:number;
    orgainization_id:number;
    contact_name:string;
    orgainization_logo_url:string;
    contact_image_url:string;
    contact_email:string;
    contact_number:string;
    contact_address:string;
}
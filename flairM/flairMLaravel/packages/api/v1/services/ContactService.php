<?php

namespace Api\v1\Services;

use Api\v1\model\Contact;

class ContactService {

    public static function getContactList($organization_id)
	{
		try{
            $data = Contact::select()
                    ->where('contact_status','ACTIVE')
                    ->where('organization_id',$organization_id)
					->orderByDesc('contact_id')
                    ->get();
            if($data){
                return $data;
            }else{
                return false;
            }
            
        }catch(Exception $e){

            return false;
        }
	}

	public static function saveContactData($data)
	{
		try{
	
            $contact = new Contact;
        
            $contact->organization_id = $data->organization_id;
            $contact->contact_name = $data->contact_name;
            $contact->contact_image_url = $data->contact_image_url;
            $contact->contact_email = $data->contact_email;
            $contact->contact_number = $data->contact_number;
			$contact->contact_address = $data->contact_address	;
			
			$response = $contact->save();
			
            if($response=='1'){
                return $response;
            }else{
                return false;
            }
        }
        catch(Exception $e){
            return false;
        }   
	}

	public static function getContactDataById($id)
	{
		try{
            $data = Contact::select()
					->where('contact_id',$id)
                    ->get();
            if($data){
                return $data;
            }else{
                return false;
            }
        }catch(Exception $e){

            return false;
        }
	}
   
}


?>

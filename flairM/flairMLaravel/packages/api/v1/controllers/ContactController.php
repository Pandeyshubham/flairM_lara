<?php

namespace Api\v1\controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Validation\ValidationException;
use Illuminate\Http\Request;

use Api\v1\services\ContactService;


class ContactController extends Controller {
	
    public function __construct(Request $request){
        header("Access-Control-Allow-Origin: *"); 
        header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization, X-Requested-With");
    }
	
    public function create(Request $request) {
    
        $data= json_decode($request->getContent(), true);
        $validator = Validator::make(
        $data,
        [
        'organization_id'=>'required | integer',
        'contact_name' => 'required | string',
        'contact_image_url'=>'required | string',
        'contact_email'=>'required | email',
        'contact_number'=>'required',
        'contact_address' =>'required'
        ]);

        if ($validator->fails()):
            $errors=(array)$validator->errors();
            foreach($errors as $one_error){
                foreach($one_error as $key=>$value){
                    $error=$value['0'];
                    return json_encode(array('response'=> $error));
                }
            }
        else:
            $organization_data=ContactService::saveContactData($request);
            if ($organization_data):
                return json_encode(array('response'=> 'success'));
            else:
                return json_encode(array('response'=> "Please try again"));
            endif;
        endif;
    }

    public function byorganization($id) {
        $validator = Validator::make([
            'id' => $id,
            ], [
            'id' => 'required | integer',
            ]);
    
        if ($validator->fails()):
            $errors=(array)$validator->errors();
            foreach($errors as $one_error){
                foreach($one_error as $key=>$value){
                    $error=$value['0'];
                    return json_encode(array('response' => $error));
                }
            }
        else:
            $list_response=ContactService::getContactList($id);
            if ($list_response):
                return json_encode(array('response' => $list_response));
            else:
                return json_encode(array('response' => "No records found"));
            endif;
        endif;
    }

    public function getbyid($id) {

        $validator = Validator::make([
            'id' => $id,
            ], [
            'id' => 'required | integer',
            ]);
    
        if ($validator->fails()):
            $errors=(array)$validator->errors();
            foreach($errors as $one_error){
                foreach($one_error as $key=>$value){
                    $error=$value['0'];
                    return json_encode(array('response' => $error));
                }
            }
        else:
            $organization_data=ContactService::getOrganizationDataById($id);
            if ($organization_data):
                return json_encode(array('response' => $organization_data));
            else:
                return json_encode(array('response' => "Please try again"));
            endif;
        endif;
    }
}

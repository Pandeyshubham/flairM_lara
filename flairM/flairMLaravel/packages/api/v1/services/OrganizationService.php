<?php

namespace Api\v1\Services;

use Api\v1\model\Organization;

class OrganizationService extends Organization {

	public static function getOrganizationList()
	{
		try{
            $data=Organization::select()
					->where('organization_status','ACTIVE')
					->orderByDesc('organization_id')
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

	public static function saveOrganizationData($data)
	{
		try{
	
            $organization = new Organization;
        
            $organization->organization_name=$data->organization_name;
            $organization->organization_logo_url=$data->organization_logo_url;
			$organization->organization_email=$data->organization_email;
			
			$response=$organization->save();
			
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

	public static function getOrganizationDataById($id)
	{
		try{
            $data=Organization::select()
					->where('organization_id',$id)
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

<?php

namespace Api\v1\model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use DB;

class Contact extends Model
{
    protected $connection = 'mysql';
    public $timestamps = false;
    protected $table = "contact";
    protected $fillable = ['contact_id',
    'organization_id',
    'contact_name',
    'contact_image_url',
    'contact_email',
    'contact_number',
    'contact_address',
    'contact_created_date',
    'contact_updated_date',
    'contact_status',
    'contact_is_deleted'
    ];

}

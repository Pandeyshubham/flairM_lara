<?php

namespace Api\v1\model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use DB;

class Organization extends Model
{
    protected $connection = 'mysql';
    public $timestamps = false;
    protected $table = "organization";
    protected $fillable = ['organization_id',
    'organization_name',
    'organization_logo_url',
    'organization_email',
    'organization_created_date',
    'organization_updated_date',
    'organization_status',
    'organization_is_deleted'
    ];

}

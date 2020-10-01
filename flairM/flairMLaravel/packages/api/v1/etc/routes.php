<?php
  
  Route::post('/v1/organization/add', 'api\v1\controllers\OrganizationController@create');
  Route::get('/v1/organization/list', 'api\v1\controllers\OrganizationController@list');
  Route::get('/v1/organization/{id}', 'api\v1\controllers\OrganizationController@getbyid');

  Route::post('/v1/contact/add', 'api\v1\controllers\ContactController@create');
  Route::get('/v1/contact/byorganizationid/{id}', 'api\v1\controllers\ContactController@byorganization');
  
  
    



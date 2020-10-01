<?php
namespace Api\v1\etc;

use Illuminate\Support\ServiceProvider;

class ApiServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__.'/routes.php';
        include base_path('packages\api\v1\etc\routes.php');
        $this->app->make('Api\v1\Controllers\ContactController');
		$this->app->make('Api\v1\controllers\OrganizationController');
    }
}


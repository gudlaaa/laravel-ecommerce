<?php

namespace Modules\Accounts\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Contracts\Support\Renderable;
use Modules\Accounts\AccountService\AccountService;

class AccountsController extends Controller
{
    private $accounts;
    
    public function __construct( AccountService $account ){
        $this->accounts = $account;
         
    }
    public function class(){
        //Lots of logic here.
        //return $this->accounts->testData();
        return User::getUserByKey('id',2);
        //return 'this is nice from controller';
    }

}

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {

let authService=inject(AuthService)
let router =inject(Router)
if(authService.IstokenInStorage){
  return true
}
else{
alert('you should loin first')
router.navigate(['/User'])
  return false;
}
};

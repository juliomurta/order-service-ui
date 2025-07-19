import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HealthCheckService } from '../model/health-check.service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const healthService = inject(HealthCheckService);
  const router = inject(Router);
  
  try {
    const response: any = await firstValueFrom(healthService.isLoggedIn());
    if (response && response.isAuthenticated) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    router.navigate(['/login']);
    return false;
  }
};

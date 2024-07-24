import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
  }
    
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

    setItem(key: string, value: string): void {
      if (this.isBrowser()) {
        localStorage.setItem(key, value);
      }
    }
     
    getItem(key: string): string | null {
      if(this.isBrowser()){
        return localStorage.getItem(key);
      }
      return null;
    }
    
    removeItem(key: string): void {
      if(this.isBrowser()){
        localStorage.removeItem(key);
      }
    }
  
    clear(): void {
      if(this.isBrowser()){
      localStorage.clear();
      }
    }
}

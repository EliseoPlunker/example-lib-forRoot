import { ModuleWithProviders,NgModule,Optional,SkipSelf } from '@angular/core';

import { AppLibComponent } from './app-lib.component';
import { CommonModule } from '@angular/common'; 
import { AppLibService,UserServiceConfig } from './app-lib.service';


@NgModule({
  declarations: [AppLibComponent],
  imports: [CommonModule
  ],
  exports: [AppLibComponent]
})
export class AppLibModule { 
  constructor(@Optional() @SkipSelf() parentModule?: AppLibModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(config: UserServiceConfig): ModuleWithProviders<AppLibModule> {
    console.log(config)
    return {
      ngModule: AppLibModule,
      providers: [
        {provide: AppLibService, useValue: config }
      ]
    };
  }
}

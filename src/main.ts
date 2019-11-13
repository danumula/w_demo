/*!

 =========================================================
 * Ashok - Dinesh - v0.1.0
 =========================================================

 * Copyright 2019 Dinesh Anumula
 * Licensed under MIT (https://github.com/danumula/w_demo/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

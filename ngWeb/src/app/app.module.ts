import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { AppComponent } from './app.component';
import { CanActivateService } from './app-routes/can-activate.service';
import { ResolveWorkService } from './app-routes/resolve-work.service';
import { ResolveShareService } from './app-routes/resolve-share.service';
import { ResolveArticleService } from './app-routes/resolve-article.service';
import { ResolvePeopleService } from './app-routes/resolve-people.service';
import { UserService } from './service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesProvider} from './service/services';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    CanActivateService,
    UserService,
    ResolveWorkService,
    ResolveShareService,
    ResolveArticleService,
    ResolvePeopleService,
    ServicesProvider,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleContent1Component } from './article-content1/article-content1.component';
import { ArticleContent2Component } from './article-content2/article-content2.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleContent1Component,
    ArticleContent2Component,
    SendEmailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
         {
            path: 'jersey_example',
            component: ArticleContent1Component
         },
          {
            path: 'spring_mvc_boot',
            component: ArticleContent2Component
         },
          {
            path: '',
            component: HomeComponent
         },
          {
            path: 'home',
            component: HomeComponent
         }
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

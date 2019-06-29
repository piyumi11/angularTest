import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleContent1Component } from './article-content1/article-content1.component';
import { ArticleContent2Component } from './article-content2/article-content2.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { HomeComponent } from './home/home.component';
import { ArticleContent3Component } from './article-content3/article-content3.component';
import { ArticleContent4Component } from './article-content4/article-content4.component';
import { ArticleContent5Component } from './article-content5/article-content5.component';
import { ArticleContent6Component } from './article-content6/article-content6.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleContent1Component,
    ArticleContent2Component,
    SendEmailComponent,
    HomeComponent,
    ArticleContent3Component,
    ArticleContent4Component,
    ArticleContent5Component,
    ArticleContent6Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
         {
            path: 'introduction_to_docker',
            component: ArticleContent3Component
         },
         {
            path: 'jersey_example',
            component: ArticleContent1Component
         },
          {
            path: 'spring_mvc_boot',
            component: ArticleContent2Component
         },
         {
            path: 'lamp_and_codeigniter',
            component: ArticleContent4Component
         },
         {
            path: 'php_login_example',
            component: ArticleContent5Component
         },
         {
            path: 'design_patterns_java',
            component: ArticleContent6Component
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

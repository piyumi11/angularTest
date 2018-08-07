import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleContent1Component } from './article-content1/article-content1.component';
import { ArticleContent2Component } from './article-content2/article-content2.component';
import { SendEmailComponent } from './send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleContent1Component,
    ArticleContent2Component,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
         {
            path: 'jersey_example',
            component: ArticleContent1Component
         },
          {
            path: 'test_example',
            component: ArticleContent2Component
         }
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

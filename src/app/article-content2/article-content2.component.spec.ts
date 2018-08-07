import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent2Component } from './article-content2.component';

describe('ArticleContent2Component', () => {
  let component: ArticleContent2Component;
  let fixture: ComponentFixture<ArticleContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent1Component } from './article-content1.component';

describe('ArticleContent1Component', () => {
  let component: ArticleContent1Component;
  let fixture: ComponentFixture<ArticleContent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleContent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

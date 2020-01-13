import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent8Component } from './article-content8.component';

describe('ArticleContent8Component', () => {
  let component: ArticleContent8Component;
  let fixture: ComponentFixture<ArticleContent8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleContent8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

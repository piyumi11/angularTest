import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent9Component } from './article-content11.component';

describe('ArticleContent9Component', () => {
  let component: ArticleContent11Component;
  let fixture: ComponentFixture<ArticleContent11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleContent9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleContent9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

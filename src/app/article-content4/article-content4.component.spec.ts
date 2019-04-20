import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent3Component } from './article-content3.component';

describe('ArticleContent3Component', () => {
  let component: ArticleContent3Component;
  let fixture: ComponentFixture<ArticleContent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleContent3Component ]
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

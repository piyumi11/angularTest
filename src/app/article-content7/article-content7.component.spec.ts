import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent7Component } from './article-content7.component';

describe('ArticleContent7Component', () => {
  let component: ArticleContent7Component;
  let fixture: ComponentFixture<ArticleContent7Component>;

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

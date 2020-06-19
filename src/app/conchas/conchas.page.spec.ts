import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConchasPage } from './conchas.page';

describe('ConchasPage', () => {
  let component: ConchasPage;
  let fixture: ComponentFixture<ConchasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConchasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConchasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

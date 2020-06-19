import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasteloceuPage } from './casteloceu.page';

describe('CasteloceuPage', () => {
  let component: CasteloceuPage;
  let fixture: ComponentFixture<CasteloceuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasteloceuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasteloceuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

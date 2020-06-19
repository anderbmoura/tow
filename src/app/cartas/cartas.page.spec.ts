import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartasPage } from './cartas.page';

describe('CartasPage', () => {
  let component: CartasPage;
  let fixture: ComponentFixture<CartasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

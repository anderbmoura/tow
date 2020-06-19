import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuildaPage } from './guilda.page';

describe('GuildaPage', () => {
  let component: GuildaPage;
  let fixture: ComponentFixture<GuildaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuildaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import {StoreModule} from '@ngrx/store';
import {settingsReducer} from '../../reducers/settings/settings.reducer';
import {MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {currentId} from 'async_hooks';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports: [
        StoreModule.forRoot({ settings: settingsReducer }),
        MatSelectModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should detect that default value of currency is USD', (done: DoneFn) => {
    component.$currentCurrency.subscribe((currentCurrency) => {
      if (currentCurrency === 'USD') {
        done();
      } else {
        return done.fail('Failed to expect that \'USD\' is the default currency');
      }
    }, done.fail);
  });

  it('should change currency when changeCurrency is invoked', (done: DoneFn) => {
    component.changeCurrency('EUR');
    component.$currentCurrency.subscribe((currentCurrency) => {
      if (currentCurrency === 'EUR') {
        done();
      } else {
        return done.fail('Failed to change currency to \'EUR\'');
      }
    }, done.fail);
  });

  it('should expect three types of currencies', (done: DoneFn) => {
    component.$currencies.subscribe((currencies) => {
      const defaultCurrencies = ['USD', 'EUR', 'CNY'];
      for (const currency of currencies) {
        if (defaultCurrencies.indexOf(currency) === -1) {
          done.fail('currency: ' + currency + ' was not found in the default currencies');
        }
      }
      done();
    }, done.fail);
  });
});

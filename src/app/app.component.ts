import { Component } from '@angular/core';
import { CalcApiService } from './entities/calc-api.service';
import { noop, tap } from 'rxjs';
import { CalcInputModel } from './entities/calc.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result: string | undefined = '';
  public history$ = this.calcApi.getHistory$();

  constructor(private calcApi: CalcApiService) {
  }

  public onDigitClick(s: string): void {
    this.result = this.result + s;
    if (s === '=') {
      const tmp = this.result.replace('=', '');
      let operator = '+';
      if (tmp.includes('+'))
        operator = '+';
      else if (tmp.includes('-'))
        operator = '-';
      else if (tmp.includes('*'))
        operator = '*';
      else operator = '/';

      const args = tmp.split(operator);

      const obj = new CalcInputModel();
      obj.number_1 = args[0];
      obj.number_2 = args[1];
      obj.operator = operator;
      this.calcApi.calculate$(obj)
        .pipe(
          tap((resp) => this.result = resp.result),
          tap(() => this.history$ = this.calcApi.getHistory$())
        )
        .subscribe(noop);
    }
  }

  public onClearClick(): void {
    this.result = '';
    this.calcApi.clearHistory$()
      .pipe(tap(() => this.history$ = this.calcApi.getHistory$()))
      .subscribe(noop);
  }
}

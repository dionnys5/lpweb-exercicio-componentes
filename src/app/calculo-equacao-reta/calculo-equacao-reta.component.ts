import {Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calculo-equacao-reta',
  templateUrl: './calculo-equacao-reta.component.html',
  styleUrls: ['./calculo-equacao-reta.component.css', '../../../node_modules/@progress/kendo-theme-default/dist/all.css'],
    encapsulation: ViewEncapsulation.None
})
export class CalculoEquacaoRetaComponent implements OnInit {
    @Input() ponto_a = null;
    @Input() ponto_b = null;
    @Input() coeficiente = null;
    problema = null;
    equacao = null;
    angulo = null;
    dados = [
        {
            name: 'Ponto A',
            data: this.ponto_a
        },
        {
            name: 'Ponto B',
            data: this.ponto_b
        }
    ];

  constructor() { }
  ngOnInit() {
        if(this.ponto_a && this.ponto_b) {
            if (this.ponto_a[0] + this.ponto_b[0] === 0) {
                this.problema = 'Valores de x inválidos';
            } else {
                let m = (this.ponto_b[1] - this.ponto_a[1])/ (this.ponto_b[0] - this.ponto_a[0]);
                const c = m * (this.ponto_a[0] * -1) + this.ponto_a[1];
                this.equacao =  'y = '+ m +'x' + c;
                let angleRad = Math.atan((this.ponto_a[1]-this.ponto_b[1])/(this.ponto_a[0]-this.ponto_b[0]));
                let angleDeg = angleRad * 180 / Math.PI;
                this.angulo = Math.round(angleDeg * 100) / 100;

            }
        } else {
            if (this.ponto_a && this.coeficiente) {
                let m = this.coeficiente;
                const c = m * (this.ponto_a[0] * -1) + this.ponto_a[1];
                console.log('Resposta: y = ' + m + 'x' + c);
            } else {
                this.problema = 'Valores de entrada incorretos';
            }
        }

  }

}

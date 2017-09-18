import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'page-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.less']
})
export class IndexPage implements OnInit, OnDestroy {

  constructor(
    private _route: ActivatedRoute
  ) { }

  public cursos: any;
  private _inscricao: Subscription;

  public ngOnInit(): void {
    this._inscricao = this._route.data.subscribe((dados: { cursos: any }) => {
      this.cursos = dados.cursos;
      console.log(this.cursos);
    }, erro => console.log(erro));
  }

  public ngOnDestroy(): void {
    this._inscricao.unsubscribe();
  }

}

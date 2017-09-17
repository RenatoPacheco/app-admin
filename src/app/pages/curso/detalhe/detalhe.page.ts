import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'page-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.less']
})
export class DetalhePage implements OnInit, OnDestroy {

  constructor(
    private _route: ActivatedRoute
  ) { }

  public id: string;
  private _inscricao: Subscription;

  public ngOnInit(): void {
    this._inscricao = this._route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

  public ngOnDestroy(): void {
    this._inscricao.unsubscribe();
  }

}

import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor() { }

  public estaAutenticado(): boolean {
    return true;
  }

}

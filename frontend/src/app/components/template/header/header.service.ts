import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface HeaderData {
  title: string,
  icon: string,
  routeUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: '/'
  });

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}

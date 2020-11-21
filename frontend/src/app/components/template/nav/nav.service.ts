import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
	private _isOpened: boolean = true;

  constructor() { }

  get isOpened(): boolean {
  	return this._isOpened;
  }

  set isOpened(open: boolean) {
  	this._isOpened = open;
  }
}

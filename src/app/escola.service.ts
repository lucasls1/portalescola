import { Injectable } from '@angular/core';

import { Escola } from './escola';
import { ESCOLAS } from './mock-escola';

@Injectable()
export class EscolaService {
  getEscolas(): Promise<Escola[]> {
    return Promise.resolve(ESCOLAS);
  }
}

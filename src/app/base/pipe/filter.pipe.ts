import { Pipe, PipeTransform } from '@angular/core';

import { FilterParams } from '../models/filter-params.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: string[], params: FilterParams): string[] {
    if (!list || !params) {
      return list
    }

    if (params.typeValue === 'number') {
      return list.filter((element) => element.length > params.value)
    }

    if (params.typeValue === 'string' && !params.register) {
      const etalon = String(params.value).toLowerCase();
      return list.filter((element) => element.toLowerCase().includes(etalon));
    } else {
     return list.filter((element) => element.includes(String(params.value)));
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {
   filterBy = filterBy ? filterBy.toLowerCase() : null;

  return filterBy ? value.filter(
    (prod: IProduct) =>
        prod.productName.toLowerCase().indexOf(filterBy) !== -1
    ) : value;
  }

}

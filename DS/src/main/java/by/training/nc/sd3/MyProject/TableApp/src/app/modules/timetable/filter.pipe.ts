import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(tasks: any[], filterQuery: string): any[] {
    return tasks.filter(task => task.id !== filterQuery);
  }
}

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(items: any[], sortedBy: string): any {
    return items.sort((a, b) => {return a[sortedBy] - b[sortedBy]});
  }
}

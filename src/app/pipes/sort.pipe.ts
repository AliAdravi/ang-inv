import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "orderBy"
})

export class SortPipe implements PipeTransform{
    transform(array: any[], direction: boolean = true): any {
        return array.sort((a, b) =>  a - b);
    }
}
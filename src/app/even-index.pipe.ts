import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'evenIndex'
})
export class ShowEvenIndexPipe implements PipeTransform {
    transform(base: Array<string|number>){
        return base.filter((value, index)=> index%2==0)
    }
}
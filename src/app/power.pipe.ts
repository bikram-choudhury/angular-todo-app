import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'power'
})
export class PowerPipe implements PipeTransform {
    /*transform(baseValue: number, exponential1: number, exponential2: number) {
        const exponential = exponential1 + exponential2;
        return Math.pow(baseValue, exponential);
    }*/
    transform(baseValue: number, ...args) {
        const exponential = args.reduce((val, sum) => val+sum);
        console.log(args, exponential);
        return Math.pow(baseValue, exponential);
    }
}
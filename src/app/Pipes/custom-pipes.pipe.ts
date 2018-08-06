import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {
  transform(persons: any[], searchBox, args: string[] ): any {
    // If nothing is typed in the searchbox all the people will appear 
    if(!persons || !searchBox) 
    return persons;
    // If not then we will filter according to a person's name with the chacters provided by user in the searchBox
    
    return persons.filter(

      function(person){

        return person.name.toLowerCase().includes(searchBox.toLowerCase());

})
}
}

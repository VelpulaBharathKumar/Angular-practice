import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO_APPLICATION';
  taskList:any[]=[];

  addTask(item:string){
    this.taskList.push({id:this.taskList.length-1,name:item});
  }

  remove(id:number){
    this.taskList.splice(id,1)
  }
}

import {Component, Input} from '@angular/core';
import {IProjectName} from "../../../../models/employees";

@Component({
  selector: 'app-project-name',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() informationData: IProjectName | null = null;
}

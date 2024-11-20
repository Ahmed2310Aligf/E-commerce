import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { RouterModule } from '@angular/router';
// import { Store } from '../../models/store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  logo: string="cr7.jpg"
  store:Store=new Store("C7R",["monello", "josi", "berbu"],"paws");

}

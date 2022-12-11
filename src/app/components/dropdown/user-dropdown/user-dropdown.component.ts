import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html'
})
export class UserDropdownComponent implements OnInit {

  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef | undefined;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef | undefined;
  ngOnInit() {}
  toggleDropdown(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  createPoppper() {
    createPopper(
      this.btnDropdownRef?.nativeElement,
      this.popoverDropdownRef?.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }

  //Obtener datos del usuario

  nombreUsuario = this.getNombreUser();

  getNombreUser() {
    let user = JSON.parse(localStorage.getItem("usuario")!);
    console.log(user)
    return user;
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string;
  password: string;


  constructor(private menu: MenuController, public afAuth: AngularFireAuth, private toastr: ToastController, private router: Router) {
     this.menu.enable(false, 'custom');}
 
  ngOnInit() {
  }

  async login() {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      this.router.navigate(['/profile-page']);
    } catch(err){
        console.dir(err)
        if(err.code == "auth/user-not-found"){
          console.log("User not found")
          this.toast('Invalid username or password', 'warning')
        } else{
          this.toast('Error: ', err.message)
        }
    }
  }

  async toast(message,status){
    const toast = await this.toastr.create({
    message: message,
    color: status,
    position: 'top',
    duration: 2000
    });
    toast.present(); 
  }
  


  goToRegister() {
    this.router.navigate(['/register']);
  }

  
}

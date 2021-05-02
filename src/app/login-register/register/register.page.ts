import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  email: string;
  password: string;
  passwordAgain: string;
  phone:string;
 
   constructor(private menu: MenuController,
     private afs: AngularFirestore,
     public afAuth: AngularFireAuth,
     private router: Router,
     private loadingCtrl: LoadingController,
     private toastCtrl: ToastController
   ) {this.menu.enable(false, 'custom'); }
 
   ngOnInit() {
   }
 async register(){

   if(this.name && this.email && this.phone && this.password && this.passwordAgain && this.password == this.passwordAgain) {
     const loading = await this.loadingCtrl.create({
       message: 'Creating account..',
       spinner: 'crescent',
       showBackdrop: true
     });
     
     loading.present();
     this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
     .then((data) =>{
       this.afs.collection('users').doc(data.user.uid).set({
         'userId': data.user.uid,
         'userName': this.name,
         'userEmail': this.email,
         'userPhone': this.phone,
         'userPassword' : this.password,
         'createdAt': Date.now()
       })

       data.user.updateProfile({
        displayName: this.name,
        photoURL: ''
      })
       
       .then(() =>{
         loading.dismiss();
         this.toast('Account Created! Please login to confirm details!', 'success');
         this.router.navigate(['/loginaftersignup']);
       })
       
       .catch(error=>{
         loading.dismiss();
         console.log(error.message, 'danger');
       })
     })
     
     .catch(error=>{
       loading.dismiss();
       this.toast(error.message, 'danger');
     })
   
     }
     
     else {
       this.toast('Please complete the empty slots', 'warning')
     }
   }
   
   async toast(message,status){
     const toast = await this.toastCtrl.create({
       message: message,
       color:status,
       position: 'top',
       duration: 2000
     });
     toast.present()
   }

   goToLogin() {
    this.router.navigate(['/login']);
  }


 
}

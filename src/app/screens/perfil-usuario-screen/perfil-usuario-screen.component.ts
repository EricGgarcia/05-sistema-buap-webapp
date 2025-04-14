import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-screen',
  templateUrl: './perfil-usuario-screen.component.html',
  styleUrls: ['./perfil-usuario-screen.component.scss']
})
export class PerfilUsuarioScreenComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}

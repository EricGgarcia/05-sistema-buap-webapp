import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrucciones-screen',
  templateUrl: './instrucciones-screen.component.html',
  styleUrls: ['./instrucciones-screen.component.scss']
})
export class InstruccionesScreenComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

  registrarCodigo(){}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:string[]=[
    "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
    "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
    "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
    "https://www.cloudsavvyit.com/p/uploads/2020/02/ba1dae28.png",
    "https://julien.lebunetel.com/dev/CSS_frameworks/images/bootstrap-social.png",
    "https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLrPd1Wp-eNbTQdNoIHYuo2CIUSexSJN90rQ&usqp=CAU",
    "https://5.imimg.com/data5/DC/DG/GLADMIN-43091998/net-training-institute-500x500.png",
    "https://i.pinimg.com/originals/21/88/b3/2188b32bdef2b4d92d0933a31a131b9d.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlACpJ9xebH78SqXXDOogWAJ3_IHfFh68-vQ&usqp=CAU",
    "data:image/png;base64,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",
    "https://cloudblogs.microsoft.com/uploads/prod/sites/32/2020/05/SQL.png",
    "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg"
                  ]


  constructor() { }

  ngOnInit(): void {
  }

}

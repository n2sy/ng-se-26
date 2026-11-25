import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-infos',
  imports: [RouterLink],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
  candId;
  private actRoute = inject(ActivatedRoute);

  ngOnInit() {
    // V1
    // console.log(this.actRoute.snapshot.params);
    //this.candId = this.actRoute.snapshot.paramMap.get('candidatId');

    //V2
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candId = p.get('candidatId');
      },
    });
  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { GestionCandidats } from '../services/gestion-candidats';
import { Candidat } from '../models/candidat.model';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';

@Component({
  selector: 'app-infos',
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
  candId;
  candidateToShow: Candidat;
  private actRoute = inject(ActivatedRoute);
  private candService = inject(GestionCandidats);
  private router = inject(Router);

  ngOnInit() {
    // V1
    // console.log(this.actRoute.snapshot.params);
    //this.candId = this.actRoute.snapshot.paramMap.get('candidatId');
    //V2
    // this.actRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     this.candId = p.get('candidatId');
    //   },
    // });

    this.candidateToShow = this.candService.getCandidatById(
      this.actRoute.snapshot.paramMap.get('candidatId'),
    );
    if (!this.candidateToShow) this.router.navigateByUrl('/not-found');
  }
}

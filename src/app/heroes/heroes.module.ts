import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { DbzModule } from "../dbz/dbz.module";




@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
        

    ],
    imports: [
        CommonModule,
        
        

    ],
    exports: [
        HeroComponent,
        ListComponent,
        
    ],
})

export class HeroesModule {}
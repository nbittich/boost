import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuardService } from "@service/auth-guard.service";

const routes: Route[] = [
  {
    path: "",
    loadChildren: () =>
      import("./feat/public-area/public-area.module").then(
        (m) => m.PublicAreaModule
      ),
  },
  {
    path: "books",
    loadChildren: () =>
      import("./feat/book/book.module").then((m) => m.BookModule),
  },
  {
    path: "user",
    
    loadChildren: () =>
      import("./feat/user-area/user-area.module").then((m) => m.UserAreaModule),
  },
  {
    path: "**",
    redirectTo:"error",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

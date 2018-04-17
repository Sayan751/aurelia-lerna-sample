import { RouteConfig, Router } from "aurelia-router";

export class RouteGenerator {
    public id = Math.random();
    private routes: RouteConfig[] = [];
    private router: Router;

    public setRouter(router: Router) {
        this.router = router;
    }
    public addRoute(route: RouteConfig) {
        this.routes.push(route);
    }
    public getRoutes() { return this.routes; }

    public getUrl(routeName: string) {
        return this.router.generate(routeName);
    }
}
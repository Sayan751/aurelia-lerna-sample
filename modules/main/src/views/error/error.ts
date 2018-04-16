import fontawesome from "@fortawesome/fontawesome";
import { faExclamationTriangle } from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(faExclamationTriangle);

export class Error {

  public error: { code: number, message: string };
  private errorMap = new Map<number, string>([
    [401, "You are not authorized to perform this action."],
    [403, "You do not have sufficient permission to perform this action."],
    [404, "Are you lost buddy?"],
  ]);

  public activate(routeParams: any) {
    const code = Number(routeParams.code) || 404;
    this.error = { code, message: this.errorMap.get(code) };
  }

}

export class CalcInputModel {
  public number_1: string | undefined;
  public number_2: string | undefined;
  public operator: string | undefined;
  constructor() {
  }
}

export class CalcResponseModel {
  public pk: string | undefined;
  public number_1: string | undefined;
  public number_2: string | undefined;
  public operator: string | undefined;
  public result: string | undefined;
  public date_create?: string | undefined;
  public user?: string | undefined;
}

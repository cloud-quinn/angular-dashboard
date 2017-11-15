export class Pilot {

  id: string;
  title: string;
  startDate: string;
  endDate: string;
  ratings: number;
  shares: number;

  constructor(id: string, title: string, startDate: string, endDate: string, ratings: number, shares: number) {
    this.id = id;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.ratings = ratings;
    this.shares = shares;
  }

}

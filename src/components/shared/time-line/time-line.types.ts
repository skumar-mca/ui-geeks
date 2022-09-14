export interface ITimeLineItem {
  date: string;
  mileStone: string;
  title: string;
  description?: string;
}
export interface ITimeLineProps {
  timeLineList: Array<ITimeLineItem>;
  heading: string;
}

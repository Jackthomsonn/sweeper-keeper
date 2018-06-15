import { ITable } from './ITable';
import { IFixture } from './IFixture';

export interface IGroup {
  groupName: string;
  fixtures: Array<IFixture>;
  table: Array<ITable>;
}

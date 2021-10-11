import {
  IAlignContent,
  IAlignItems,
  IAlignSelf,
  IJustifyContent,
} from "../data/constants";

export interface IRow {
  alignContent?: IAlignContent;
  alignContentAtLeastMobile?: IAlignContent;
  alignContentAtLeastTablet?: IAlignContent;
  alignContentAtLeastLaptop?: IAlignContent;
  alignItems?: IAlignItems;
  alignItemsAtLeastMobile?: IAlignItems;
  alignItemsAtLeastTablet?: IAlignItems;
  alignItemsAtLeastLaptop?: IAlignItems;
  alignSelf?: IAlignSelf;
  alignSelfAtLeastMobile?: IAlignSelf;
  alignSelfAtLeastTablet?: IAlignSelf;
  alignSelfAtLeastLaptop?: IAlignSelf;
  justifyContent?: IJustifyContent;
  justifyContentAtLeastMobile?: IJustifyContent;
  justifyContentAtLeastTablet?: IJustifyContent;
  justifyContentAtLeastLaptop?: IJustifyContent;
}

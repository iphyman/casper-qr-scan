import { IDisplay, IAlignItems, IJustifyContent } from "../data/constants";

export interface IColumn {
  alignItems?: IAlignItems;
  alignItemsMobileL?: IAlignItems;
  column?: string | number | boolean;
  columnAtLeastMobile?: string | number;
  columnAtLeastMobileL?: string | number;
  columnAtLeastTablet?: string | number;
  columnAtLeastTabletL?: string | number;
  columnAtLeastLaptop?: string | number;
  display?: IDisplay;
  justifyContent?: IJustifyContent;
  justifyContentAtLeastMobile?: IJustifyContent;
  justifyContentAtLeastMobileL?: IJustifyContent;
  justifyContentAtLeastTablet?: IJustifyContent;
  justifyContentAtLeastLaptop?: IJustifyContent;
  margin?: string;
  marginMobile?: string;
  marginTablet?: string;
  padding?: string;
}

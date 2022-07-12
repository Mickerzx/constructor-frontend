import React, { Attributes, ReactNode } from 'react';
// TODO: Не забывать актуализировать!!!
import {
  MallButton,
  MallInput,
  MallTextarea,
  MallDivider,
  MallStrip,
  MallTitle,
  MallParagraph,
  MallSelect,
  MallCallbackForm,
  MallSlider,
  MallPagination,
  MallBreadcrumbs,
} from '@yeticrab/mall-constructor-components';

import { IComponent } from '../types-space/interfaces/IComponent';

type PropTypes = Attributes | any;

const getWidget = (widgetType: IComponent['type']): React.FC<PropTypes> | string => {
  switch (widgetType) {
    case 'MallButton':
      return MallButton;
    case 'MallInput':
      return MallInput;
    case 'MallTextarea':
      return MallTextarea;
    case 'MallDivider':
      return MallDivider;
    case 'MallStrip':
      return MallStrip;
    case 'MallTitle':
      return MallTitle;
    case 'MallParagraph':
      return MallParagraph;
    case 'MallSelect':
      return MallSelect;
    case 'MallCallbackForm':
      return MallCallbackForm;
    case 'MallSlider':
      return MallSlider;
    case 'MallPagination':
      return MallPagination;
    case 'MallBreadcrumbs':
      return MallBreadcrumbs;
    default:
      return widgetType;
  }
};

const createComponent = (
  type: IComponent['type'] | string,
  params: IComponent['parameters'] | Attributes,
  childs: ReactNode
) => {
  const componentRef = getWidget(type);
  if (componentRef) {
    return React.createElement(componentRef, params, childs);
  }
};

const childrensExtractor = (
  childs: string | number | boolean | any[] | React.ReactElement<any, string | React.JSXElementConstructor<any>>
): any => {
  if (!Array.isArray(childs)) {
    return childs;
  } else {
    return childs.map((child) =>
      createComponent(child.type, child.parameters, childrensExtractor(child.parameters.children))
    );
  }
};

export const createWidget = (widget: IComponent) => {
  const children = widget.parameters.children ? childrensExtractor(widget.parameters.children) : null;
  return createComponent(widget.type, widget.parameters, children);
};

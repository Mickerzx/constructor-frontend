import { ReactElement } from 'react';

export interface IComponent {
  /**
   * Пропсы и чилдрены компонента. Чилдрены могут быть как html-элементом, так и примитивом
   */
  parameters: {
    [key: string]: string | number | boolean | ReactElement | IComponent[] | string[];
  };
  /**
   * Тип компонента. Строковое представление поля component.
   */
  type: string;
}

export interface IBlock extends IComponent {
  /**
   * Уникальный идентификатор блока на холсте
   */
  blockId: string | null;
  /**
   * Порядок блока на холсте (чем меньше число, тем выше блок)
   */
  order: number;
}

export interface IWidget extends IComponent {
  /**
   * Уникальный идентификатор виджета
   */
  widgetId: number;
  /**
   * Краткое описание виджета в списке для добавления на холст
   */
  description: string;
  /**
   * Миниатюра виджета
   */
  preview?: string;
}

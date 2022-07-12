import { FC } from 'react';
import { sortBlocks } from '../utils/sortBlocks';
import { createWidget } from '../components/WidgetsCreator';
import { IBlock } from '../types-space/interfaces/IComponent';

type PropsType = {
  canvas: IBlock[];
};

const MainHeaderContent: FC<PropsType> = ({ canvas }) => {
  return (
    <div>
      {canvas?.length ? (
        canvas
          .slice()
          .sort(sortBlocks) // TODO: Возможно тут это уже лишнее действие, но убедимся в этом позже
          .map((component: IBlock) => <div key={component.blockId}>{createWidget(component)}</div>)
      ) : (
        <div>Вы не добавляли виджеты в редакторе</div>
      )}
    </div>
  );
};

export default MainHeaderContent;

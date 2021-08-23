import React from 'react';
import Tree from '@naisutech/react-tree';
import Sidebar from '../Sidebar';

const myThemes = {
  ricercoTreeview: {
    text: '#fafafa', // text color
    bg: '#2d3439', // background color of whole tree
    indicator: 'transparent', // open folder indicator color
    separator: '#d5d5d5', // row seperator color
    icon: 'black', // fill & stroke color of default icons - has no effect when using custom icons
    selectedBg: '#e9e9e9', // background of selected element
    selectedText: '#000', // text color of selected element
    hoverBg: '#d5d5d5', // background of hovered element
    hoverText: '#000', // text color of hovered element
    accentBg: '#2d3439', // background of empty folder element
    accentText: '#999', // text color of empty folder element
    padding: 0,
    height: 0,
  },
  padding: 0,
};

const HierarchyPanel = () => (
  <Tree
    nodes={[
      {
        id: '10ByROE2wbdhvkH59J0Kw',
        label: 'Root 1',
        parentId: null,
      },
      {
        id: 'bEQOG9AsLuStgYB0IaNxL',
        label: 'Root 2',
        parentId: null,
      },
      {
        id: '2tawhVZTY3osyF_GVpg2D',
        label: 'Root 3',
        parentId: null,
      },
      {
        id: 'tccHVvK4sxbzWMsKMq-_m',
        items: [
          {
            id: 'QSg7PebeNrHLbGkB82VIJ',
            label: 'File 1',
            parentId: 'tccHVvK4sxbzWMsKMq-_m',
          },
          {
            id: '9AwfDovfT3hcXMUlgPhCh',
            label: 'File 2',
            parentId: 'tccHVvK4sxbzWMsKMq-_m',
          },
          {
            id: 'fdX0X104is7HRnOLXN0Aj',
            label: 'File 3',
            parentId: 'tccHVvK4sxbzWMsKMq-_m',
          },
        ],
        label: 'Child 1',
        parentId: '10ByROE2wbdhvkH59J0Kw',
      },
      {
        id: '9Vd_R-PLpHT06XZeTOZ6J',
        label: 'Child 2',
        parentId: 'bEQOG9AsLuStgYB0IaNxL',
      },
      {
        id: 'VNtU0CaJ7bzlR4Itntwfs',
        label: 'Child 3',
        parentId: 'bEQOG9AsLuStgYB0IaNxL',
      },
      {
        id: 'RV2PIkNhF9aL58b4gzDuX',
        label: 'Child 4',
        parentId: '2tawhVZTY3osyF_GVpg2D',
      },
      {
        id: '_bK1oY7q9GjerdpkRH2ro',
        label: 'Child Child 1',
        parentId: 'tccHVvK4sxbzWMsKMq-_m',
      },
      {
        id: 'RTDbq6kwvg1ADgugomkSL',
        items: [
          {
            id: 'Y8EK7f5BYGCj5GI1BYT0W',
            label: 'File 3',
            parentId: 'RTDbq6kwvg1ADgugomkSL',
          },
          {
            id: 'bgcI4m-zJnDb5qaOyygBr',
            label: 'File 4',
            parentId: 'RTDbq6kwvg1ADgugomkSL',
          },
          {
            id: 'd0u7HZQTzSj2P5KIo1M8e',
            label: 'File 5',
            parentId: 'RTDbq6kwvg1ADgugomkSL',
          },
        ],
        label: 'Child Child 2',
        parentId: '9Vd_R-PLpHT06XZeTOZ6J',
      },
      {
        id: '4ct_V3mnPK01qxQgUgqBA',
        label: 'Child Child 3',
        parentId: 'VNtU0CaJ7bzlR4Itntwfs',
      },
    ]}
    onOpenClose={function noRefCheck() {}}
    onSelect={function noRefCheck() {}}
    theme="ricercoTreeview"
    size="full"
    customTheme={myThemes}
    containerStyle={{ padding: 0, background: 'transparent', color: 'black' }}
  />
);

const HierarchySidebar: React.FC = (props) => {
  return (
    <Sidebar content={<HierarchyPanel />} title="Hierarchy" position="left" />
  );
};

export default HierarchySidebar;

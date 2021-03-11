import React, { useState } from 'react';
import { SelectionState, IntegratedSelection } from '@devexpress/dx-react-grid';
import '../../../stylesheets/Tables.css';
import {
  Grid,
  Table,
  TableSelection,
  DragDropProvider,
  TableHeaderRow,
  TableColumnReordering
} from '@devexpress/dx-react-grid-bootstrap4';
const TableBody = props => {
  const [columns] = useState([
    { name: 'IDENTIFIER', title: '| = IDENTIFIER' },
    { name: 'PUBLISHED', title: '| = PUBLISHED' },
    { name: 'CHANNELS', title: '| = CHANNELS' },
    { name: 'RECEPIENTS', title: '| = RECEPIENTS' },
    { name: 'TRIALS', title: '| = TRIALS' },
    { name: 'DEADLINE', title: '| = DEADLINE' }
  ]);
  const [rows] = useState([
    {
      IDENTIFIER: 'a1653d4d',
      PUBLISHED: 'VW',
      CHANNELS: 1998,
      RECEPIENTS: 'Ahmed',
      TRIALS: '42',
      DEADLINE: '20-02-2020'
    },
    {
      IDENTIFIER: 'ddeb9b10',
      PUBLISHED: 'Mercedes',
      CHANNELS: 1985,
      RECEPIENTS: 'Ahmed',
      TRIALS: '42',
      DEADLINE: '20-02-2020'
    },
    {
      IDENTIFIER: 'd8ebe413',
      PUBLISHED: 'Jaguar',
      CHANNELS: 1997,
      RECEPIENTS: 'Ahmed',
      TRIALS: '42',
      DEADLINE: '20-02-2020'
    },
    {
      IDENTIFIER: 'd8ebe413',
      PUBLISHED: 'Jaguar',
      CHANNELS: 1997,
      RECEPIENTS: 'Ahmed',
      TRIALS: '42',
      DEADLINE: '20-02-2020'
    },
  
  ]);

  // const [tableColumnExtensions] = useState([
  //   { columnName: 'IDENTIFIER' },
  //   { columnName: 'PUBLISHED' },
  //   { columnName: 'CHANNELS' },
  //   { columnName: 'RECEPIENTS' },
  //   { columnName: 'TRIALS' },
  //   { columnName: 'DEADLINE' }
  // ]);
  const [columnOrder, setColumnOrder] = useState([
    'PUBLISHED',
    'CHANNELS',
    'RECEPIENTS',
    'TRIALS',
    'DEADLINE'
  ]);
  const [selection, setSelection] = useState([]);

  return (
    <Grid rows={rows} columns={columns}>
      <DragDropProvider />
      <SelectionState selection={selection} onSelectionChange={setSelection} />
      <IntegratedSelection />
      <Table
      />
      <TableColumnReordering
        order={columnOrder}
        onOrderChange={setColumnOrder}
      />
      <TableHeaderRow /> <TableSelection showSelectAll />
    </Grid>
  );
};

export default TableBody;

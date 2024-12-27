
import Column from '../types/ColumnType';
import { Invoice } from '../types/InvoiceType';
import { formatValue, formatDate } from './format_value';

const data: Invoice[] = [];


const columns: Column<Invoice>[] = [
  {
    header: 'Descrição',
    accessorKey: 'description',
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: 'Valor',
    accessorKey: 'amount',
    cell: (props) => <p>{formatValue(props.getValue())}</p>,
  },
  {
    header: 'Forma de pagamento',
    accessorKey: 'payment_method',
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: 'Data',
    accessorKey: 'date',
    cell: (props) => <p>{formatDate(props.getValue())}</p>,
  },
];

export { data, columns };
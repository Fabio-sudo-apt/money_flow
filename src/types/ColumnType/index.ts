/* eslint-disable @typescript-eslint/no-explicit-any */
type Column<TData> = {
    header: string;
    accessorKey: keyof TData;
    cell: (props: { getValue: () => any }) => JSX.Element;
  };

  export default Column;

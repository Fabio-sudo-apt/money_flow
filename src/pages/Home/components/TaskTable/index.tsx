import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Invoice, InvoiceType } from '../../../../types/InvoiceType';
import { columns } from './columns';

import { ButtonStyle, PaginationStyle, TableStyle, TextNotFound } from './style';
import { formatTypeInvoice } from '../../../../utils/format_value';
import InvoicesService from '../../../../shared/api/invoicesService';
import { Loader } from '../../style';
import { getLocalStorage } from '../../../../utils/localStorage';

interface ITaskTableProps {
    data: Invoice[];
    handleDeleteTransaction: (id: number) => void;
}

function TaskTable({ data, handleDeleteTransaction }: ITaskTableProps) {

    const numLimitPages = 4;
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState<boolean>(false);

    const colomns = useMemo(() => {
        return columns;
    }, []);

    const reversedData = useMemo(() => [...data].reverse(), [data]);

    const pagesData = useMemo(() => {
        const start = currentPage * numLimitPages;
        const end = start + numLimitPages;
        return reversedData.slice(start, end);
    }, [reversedData, currentPage]);

    const totalPages = Math.ceil(reversedData.length / numLimitPages);

    const handlePrevious = () => {
        setCurrentPage(currentPage === 0 ? totalPages - 1 : currentPage - 1);
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1 === totalPages ? 0 : currentPage + 1);
    };

    const handleDelete = (id?: number) => {
        if (id !== undefined) {
            deleteTransaction(id);
        }
    };

    const deleteTransaction = async (id: number) => {
        setLoading(true);
        try {
            const token = getLocalStorage('token');
            const isTransaction = await InvoicesService.delete(id, token);
            if (isTransaction) {
                handleDeleteTransaction(id);
            }
        } catch (error) {
            console.error('Erro ao deletar a transação:', error);
        } finally {
            setLoading(false);
        }
    };

    const table = useReactTable({
        columns: colomns,
        data: pagesData,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        data.length > 0 ?
            <>
                <TableStyle>
                    <thead>
                        {table.getHeaderGroups().map(headersGroup => (
                            <tr key={headersGroup.id}>
                                {headersGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {header.column.columnDef.header!.toString()}
                                    </th>
                                ))}
                                <th></th>
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} style={{ backgroundColor: formatTypeInvoice(row.original.type) === InvoiceType.EXPENSE ? '#ff00001a' : '#00ff001a' }}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                                <td>
                                    <ButtonStyle
                                        onClick={() => handleDelete(row.original.id)}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <Loader />
                                        ) : (
                                            <FaTrash />
                                        )}
                                    </ButtonStyle>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </TableStyle>
                {totalPages > 1 &&
                        <PaginationStyle>
                            <button onClick={handlePrevious} disabled={currentPage === 0}>Anterior</button>
                            <span>
                                Pagina {currentPage + 1} de {totalPages}
                            </span>
                            <button onClick={handleNext} disabled={pagesData.length < numLimitPages}>Próximo</button>
                        </PaginationStyle>
                    }
            </>
            : <TextNotFound>Nenhuma transação cadastrada</TextNotFound>
    );
};

export default TaskTable;

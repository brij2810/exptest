import React from 'react';
import './Table.css';

export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'right' | 'center';
  width?: string;
}

export interface TableRow {
  [key: string]: React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  className?: string;
}

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  className = '',
}) => {
  return (
    <div className={`table-container ${className}`}>
      <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`table__header ${column.align ? `table__header--${column.align}` : ''}`}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`table__row ${rowIndex < rows.length - 1 ? 'table__row--bordered' : ''}`}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`table__cell ${column.align ? `table__cell--${column.align}` : ''}`}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;


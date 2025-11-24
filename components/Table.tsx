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
  onRowHover?: (rowIndex: number | null) => void;
  hoveredRowIndex?: number | null;
}

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  className = '',
  onRowHover,
  hoveredRowIndex,
}) => {
  return (
    <div className={`table-container ${className}`}>
      <div className="table">
        {columns.map((column, columnIndex) => {
          const isLastColumn = columnIndex === columns.length - 1;
          return (
            <div
              key={column.key}
              className={`table__column ${isLastColumn ? 'table__column--last' : ''}`}
              style={column.width ? { width: column.width } : undefined}
            >
              {/* Column Header */}
              <div className={`table__header ${column.align ? `table__header--${column.align}` : ''}`}>
                <div className={`table__header-content ${isLastColumn ? 'table__header-content--last' : ''}`}>
                  {column.label}
                </div>
              </div>
              
              {/* Column Cells */}
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`table__cell-wrapper ${rowIndex < rows.length - 1 ? 'table__cell-wrapper--bordered' : ''}`}
                  data-row-index={rowIndex}
                  data-hovered={hoveredRowIndex === rowIndex ? 'true' : 'false'}
                  onMouseEnter={() => onRowHover?.(rowIndex)}
                  onMouseLeave={() => onRowHover?.(null)}
                >
                  <div className={`table__cell ${column.align ? `table__cell--${column.align}` : ''} ${isLastColumn ? 'table__cell--last' : ''}`}>
                    {row[column.key]}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;


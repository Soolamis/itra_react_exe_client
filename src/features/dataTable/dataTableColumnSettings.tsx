import { types } from './reducer'
import { COLUMNS_LOCALIZATIONS } from './constants'

type ColumnSettings = {
    [column in types.Columns]: Column;
}

interface Column {
    field: string;
    title: string;
    type?: 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency';
}

const columnSettings: ColumnSettings = {
    order_id: {
        ...getFieldAndTitle('order_id'),
    },
    order_status: {
        ...getFieldAndTitle('order_status'),
    },
    order_date: {
        ...getFieldAndTitle('order_date'),
        type: 'date',
    },
    required_date: {
        ...getFieldAndTitle('required_date'),
        type: 'date',
    },
    shipped_date: {
        ...getFieldAndTitle('shipped_date'),
        type: 'date',
    },
    manager_name: {
        ...getFieldAndTitle('manager_name'),
    },
    customer_name: {
        ...getFieldAndTitle('customer_name'),
    },
    email: {
        ...getFieldAndTitle('customer_name'),
    },
    address: {
        ...getFieldAndTitle('address')
    },
}

function getFieldAndTitle(column: types.Columns) {
    return {
        field: column,
        title: COLUMNS_LOCALIZATIONS[column],
    }
}

export function createColumnSettingList(columns: Array<types.Columns>): Array<Column> {
    return columns.map((column) => columnSettings[column]);
}
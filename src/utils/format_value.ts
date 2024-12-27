export function formatValue(value: number): string {
    const formatValue = value.toFixed(2);
    const valueText = formatValue.replace('.', ',');
    const parts = valueText.split(',');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `R$ ${parts.join(',')}`;
}

export function formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

export const maskCurrencyEvent = (value: string): string => {
    const onlyDigits = value
        .split('')
        .filter(s => /\d/.test(s))
        .join('')
        .padStart(3, '0');
    const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2);
    return maskCurrency(parseFloat(digitsFloat));
};

const maskCurrency = (value: number, locale: string = 'pt-BR', currency: string = 'BRL'): string => {
    return value.toLocaleString(locale, {
        style: 'currency',
        currency
    });
};

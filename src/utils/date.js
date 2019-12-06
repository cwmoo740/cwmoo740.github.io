export function print_date(d) {
    return new Intl.DateTimeFormat('de-DE', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(d);
}

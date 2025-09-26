import type { Route } from './+types/calendar._index';
import { FullCalendarImpl } from '~/components/labmovil/create-event';

export function meta(args: Route.MetaArgs) {
  return [
    { title: 'Administración básica de una B.D. NO SQL' },
    {
      name: 'description',
      content: 'Coloca una descripción útil para las búsquedas de Google',
    },
  ];
}

export default function CalendarRoute() {
  return <FullCalendarImpl />;
}

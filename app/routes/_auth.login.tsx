import { MainViewLogin } from '~/components/auth/login/main-view';
import type { Route } from './+types/_auth.login';

export function meta(args: Route.MetaArgs) {
  return [
    { title: 'Administración básica de una B.D. NO SQL' },
    {
      name: 'description',
      content: 'Coloca una descripción útil para las búsquedas de Google',
    },
  ];
}

export default function LoginRoute() {
  return <MainViewLogin />;
}

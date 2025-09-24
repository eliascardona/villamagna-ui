import { ChartTypeHandler } from '~/components/charts/chart-type-handler';
import { ChartContainer } from '~/components/charts/ui/chart-container';
import { ChartDetailsHeader } from '~/components/charts/ui/chart-details-header';
import { chartCatalog } from '~/lib/charts/mocks';
import type { Route } from './+types/charts.$id';

export function meta(args: Route.MetaArgs) {
  return [
    { title: 'Administración básica de una B.D. NO SQL' },
    {
      name: 'description',
      content: 'Coloca una descripción útil para las búsquedas de Google',
    },
  ];
}

export async function loader(args: Route.LoaderArgs) {
  const { id } = args.params;

  const chart = chartCatalog.find((chart) => chart.id === id);

  console.log('chart ===================');
  console.log(chart);

  return { chart };
}

export default function ChartDetailsPage(props: Route.ComponentProps) {
  const { loaderData } = props;
  const { chart } = loaderData;

  return (
    <>
      <ChartDetailsHeader />
      <ChartContainer>
        <ChartTypeHandler chart={chart} />
      </ChartContainer>
    </>
  );
}
